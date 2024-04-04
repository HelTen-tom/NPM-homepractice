import { LOCALSTORAGE__KEY, refs } from "../constans";
import { createCard } from "./createCard.js";

export function handleAddCard(card) {
    refs.listEl.insertAdjacentHTML("beforeend", createCard(card));
    const cards = JSON.parse(localStorage.getItem(LOCALSTORAGE__KEY)) || [];
  cards.push(card);
  localStorage.setItem(LOCALSTORAGE__KEY, JSON.stringify(cards))
  }