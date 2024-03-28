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
  data.forEach((value, name) => {
    data [name]=value;
  });
  console.log(data);
  localStorage.setItem(LOCALSTORAGE__KEY, JSON.stringify(data));
}
