
const containerElement = document.getElementById('container');
const btnAdd = document.getElementsByClassName('btn-add')[0];

function getData() {
  return JSON.parse(localStorage.getItem('user') || '[]');
}

getData().forEach(element => {
  const textElement = createTextElement(element.id, element.content);
  containerElement.insertBefore(textElement, btnAdd);
});

function createTextElement(id, content) {
  const textElement = document.createElement('textarea');
  textElement.classList.add('sticky');
  textElement.placeholder = 'Введите текст';
  textElement.value = content;
  textElement.addEventListener('change', () => {
    updateNote(id, textElement.value);
  });
  textElement.addEventListener('dblclick', () => {
    const shouldDelete = confirm('Вы уверены, что хотите удалить эту заметку?');
    if (shouldDelete) {
      deleteNote(id, textElement);
    }
  });
  return textElement;
}

function addNote() {
  const notes = getData();
  const newNote = {
    id: Math.floor(Math.random() * 100000),
    content: ''
  };
  const element = createTextElement(newNote.id, newNote.content);
  containerElement.insertBefore(element, btnAdd);
  notes.push(newNote);
  saveData(notes);
}

btnAdd.addEventListener('click', addNote);

function saveData(data) {
  localStorage.setItem('user', JSON.stringify(data));
}

function updateNote(id, content) {
  const notes = getData();
  const noteToUpdate = notes.find(note => note.id === id);
  if (noteToUpdate) {
    noteToUpdate.content = content;
    saveData(notes);
  }
}

function deleteNote(id, textElement) {
  const notes = getData().filter(note => note.id !== id);
  saveData(notes);
  containerElement.removeChild(textElement);
}
