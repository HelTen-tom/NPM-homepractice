import { LOCALSTORAGE__KEY, refs } from "../constans.js";
import { createCard } from "./createCard.js";
import  apiLocalStorge  from "../service/api.js";

export function handleAddCard(card) {
  refs.listEl.insertAdjacentHTML("beforeend", createCard(card));
  const cards = apiLocalStorge.get(LOCALSTORAGE__KEY) || [];
  cards.push(card);
  apiLocalStorge.set(LOCALSTORAGE__KEY, cards);
}
