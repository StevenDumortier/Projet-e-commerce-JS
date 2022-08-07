export function CardButton(product){
const cardButton = document.createElement("a");
cardButton.innerText="Voir"
cardButton.classList.add("btn", "btn-primary");
return cardButton;
}