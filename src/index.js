// import './style.css';

const addBtn = document.querySelector('#add-btn');
const cardDiv = document.querySelector('.card');
const titleInput = document.querySelector('input.title');

titleInput.addEventListener('change', (e) => {
  console.log(e.target.value);
});

titleInput.addEventListener('focusout', () => console.log("HOCUS POCUS THERE'S PIZZA ON YOUR FOCUS"))

// addBtn.addEventListener('mouseenter', () => alert('You are inside me'));
cardDiv.tabIndex = 0;

const createEntry = () => {
  
}