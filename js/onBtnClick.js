 import { handleAddCard } from "./handleAddCard.js";
 
 
 export function onBtnClick(event) {
    event.preventDefault();
    const formEl = event.currentTarget;
    const formDataValue = new FormData(formEl);
    const data = {};
    formDataValue.forEach((value, name) => {
      data[name] = value;
    });
    formEl.reset();
    handleAddCard(data);
  }