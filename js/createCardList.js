import { createCard } from "./createCard.js";

export function createCardList(cards) {
    return cards.map(createCard);
   }