import { CardBody } from "./card_body.js";
import { CardImage } from "./card_image.js";

export function ProductCard(product) {
  const card = document.createElement("div");
  card.classList.add("card", "contenair");
  card.style.width = "18rem";
  const cardImage = CardImage(product);
  const cardBody = CardBody(product);
  card.append(cardImage,cardBody);
  return card;
}
