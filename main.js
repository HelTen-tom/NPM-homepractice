import { LOCALSTORAGE__KEY, ref } from "./constans.js";
import { createCardList } from "./js/createCardList.js";
import { onBtnClick } from "./js/onBtnClick.js";
import { apiLocalStorage } from "./js/service/api.js";
import "./style.css";

const todos = JSON.parse(localStorage.getItem(LOCALSTORAGE__KEY)) || [];

refs.listEl.innerHTML = createCardList(todos).join("");
refs.formToDo.addEventListener("submit", onBtnClick);
