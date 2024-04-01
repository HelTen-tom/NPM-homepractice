import "./style.css";

const LOCALSTORAGE__KEY = "todos";
const refs = {
  formToDo: document.querySelector(".form-todo"),
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
  console.log(data);
  localStorage.setItem(LOCALSTORAGE__KEY, JSON.stringify(data));
  formEl.reset();
};
function creatCard(card) {
  return `<li class="list-item">
  <h2 class="list-item-title"></h2>
  <p class="list-item-description"></p>
</li>`
 }
