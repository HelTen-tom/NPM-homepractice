import { LOCALSTORAGE__KEY, refs } from "./constans.js";
import { createCardList } from "./js/createCardList.js";
import { onBtnClick } from "./js/onBtnClick.js";
import  apiLocalStorage  from "./service/api.js";
import "./style.css";

const todos = apiLocalStorage.get(LOCALSTORAGE__KEY) || [];

refs.listEl.innerHTML = createCardList(todos).join("");
refs.formToDo.addEventListener("submit", onBtnClick);
console.log(refs.filterTitle);
refs.filterTitle.addEventListener('input', (event)=>{
  const{value} = event.currentTarget;
console.log(event.currentTarget.value);
console.log(todos.filter((item) => item.title.includes(value)));
});