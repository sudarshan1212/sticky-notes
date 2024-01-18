

const containerElement=document.getElementById('container');
const btnAdd=document.getElementsByClassName('btn-add') [0];
let userdata=[
    {id:15555,content:""},
  
]
//localStorage.setItem('user',JSON.stringify(userdata))

// localStorage.setItem('user',JSON.stringify(notes));

data().forEach(element=>{

    const textElement=createTextElement(element.id,element.content);
    containerElement.insertBefore(textElement,btnAdd);

   
})
function  createTextElement(id,content){  
    const textElement=document.createElement('textarea');
    textElement.classList.add(
        'sticky');
    textElement.placeholder=" enter anything";
    textElement.value=content;
    textElement.addEventListener('change',()=>{
        updateNote(id,textElement.value)
    });
    textElement.addEventListener('dblclick',()=>{
       const check=confirm('are u going to dlt')
       if(check){
        deletenotes(id,textElement)
       }
    });
    return textElement;
    
}

function stickyadd(){

    const notes=data();
    const notesobject={
        id:Math.floor(Math.random()*100000),
        content:''
      }
    const element=createTextElement(notesobject.id,notesobject.content)
    containerElement.insertBefore(element,btnAdd)
    notes.push(notesobject)
   
    // localStorage.setItem('user',JSON.stringify(notes));
    save(notes)
   
    
}
btnAdd.addEventListener('click',()=>stickyadd())

  


function save(notes){
    localStorage.setItem('user',JSON.stringify(notes));
  }
 
function updateNote(id,content){
    const notes=data();
    const updateElement=notes.filter((note)=>note.id==id)[0];
    updateElement.content=content;
    localStorage.setItem('user',JSON.stringify(userdata))
    save(notes)
}

function deletenotes(id,textElement){
    const notes=data().filter((note)=>note.id!=id)
    save(notes)
   containerElement.removeChild(textElement)

}
function data(){        
    return JSON.parse(localStorage.getItem('user')|| "{}")

   }
   




// const container=document.querySelector('#container')
// const stick=document.querySelector('.btn-add')
// let userd=[
//     {id:12345,cont:''},
// ]
// // localStorage.setItem('user',JSON.stringify(userd))
// function data(){
//   return JSON.parse(localStorage.getItem('user'))
// }
// data().forEach(element => {
//  const bro= get(element.id,element.cont)
//  container.insertBefore(bro,stick)
// });
// function get(id,cont){
// const text=document.createElement('textarea')
// text.classList.add('sticky')
// text.placeholder='type some thing'
// text.value=cont
// text.addEventListener('change',()=>{
//           updateNote(id,text.value)
//       });
      
// return text
// }
// function getsticky(){
// let note=data()
// let getnotes={id:Math.floor(Math.random()*100000),
//   cont:''}
// let ele=get(getnotes.id,getnotes.cont)
// container.insertBefore(ele,stick)
// note.push(getnotes)

// save(note)
// }
// stick.addEventListener('click',()=>getsticky())
// function save(notes){
// localStorage.setItem('user',JSON.stringify(notes))
// }
// function updateNote(id,cont){
//     const notes=data();
//     const updateElement=notes.filter((note)=>note.id==id)[0];
//     updateElement.cont=cont;
//     save(notes)
// }
//



// $(document).ready(function() {
//   $('[title=" Hosted on free web hosting 000webhost.com. Host your own website for FREE."]').hide();
// });
