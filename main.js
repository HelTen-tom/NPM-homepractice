import "./style.css";

const LOCALSTORAGE__KEY = "todos";
const refs = {
  formToDo: document.querySelector(".form-todo"),
  listEl: document.querySelector(".list"),
};

refs.formToDo.addEventListener("submit", onBtnClick);

function onBtnClick(event) {
  event.preventDefault();
  const formEl = event.currentTarget;
  const formDataValue = new FormData(formEl);
  const data = {};
  formDataValue.forEach((value, name) => {
    data[name] = value;
  });
  // localStorage.setItem(LOCALSTORAGE__KEY, JSON.stringify(data));
  formEl.reset();
  handleAddCard(data);
}
function handleAddCard(card) {
  refs.listEl.insertAdjacentHTML("beforeend", creatCard(card));
  const cards = JSON.parse(localStorage.getItem(LOCALSTORAGE__KEY)) || [];
cards.push(card);
console.log(cards);
localStorage.setItem(LOCALSTORAGE__KEY, JSON.stringify(cards))
}
function creatCard(card) {
  return `<li class="list-item">
  <h2 class="list-item-title">${card.title}</h2>
  <p class="list-item-description">${card.description}</p>
</li>`;
}
