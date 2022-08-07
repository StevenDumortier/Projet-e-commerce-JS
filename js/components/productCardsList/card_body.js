import { CardButton } from "./card_body_button.js";
import { CardDescription } from "./card_body_description.js";
import { CardTitle } from "./card_body_title.js";

export function CardBody(product){
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    const cardTitle = CardTitle(product);
    const cardDescription = CardDescription(product);
    const cardButton= CardButton(product);
    cardBody.append(cardTitle,cardDescription,cardButton)
    return cardBody;
}