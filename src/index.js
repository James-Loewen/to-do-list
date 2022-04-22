// import './style.css';

const toDoList = document.querySelector('#to-do-app');
const addBtn = document.querySelector('#add-btn');
const cardDiv = document.querySelector('.card');
const titleInput = document.querySelector('input.title');
const initialItemInput = document.querySelector('#initial-input');
const arrStorage = [];

titleInput.addEventListener('change', (e) => {
  console.log(e.target.value);
});

titleInput.addEventListener('focusout', () => console.log("HOCUS POCUS THERE'S PIZZA ON YOUR FOCUS"))

// addBtn.addEventListener('mouseenter', () => alert('You are inside me'));
cardDiv.tabIndex = 0;

const createEntry = () => {
  const listItemDiv = document.createElement('div');
  listItemDiv.classList.add('list-item');

  const checkbox = document.createElement('input');
  checkbox.type = "checkbox";

  const textInput = document.createElement('input');
  textInput.classList.add('input-item');
  textInput.type = "text";

  listItemDiv.appendChild(checkbox);
  listItemDiv.appendChild(textInput);

  cardDiv.appendChild(listItemDiv);
  
  textInput.focus();
  textInput.addEventListener('keyup', (e) => {
    if (e.key === "Enter") {
      arrStorage.push(e.target.value);
      createEntry();
    }
  });
}

initialItemInput.addEventListener('keyup', (e) => {
  if (e.key === "Enter") {
    arrStorage.push(e.target.value);
    createEntry();
  }
});