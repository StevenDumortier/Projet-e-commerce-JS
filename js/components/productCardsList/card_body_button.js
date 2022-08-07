export function CardButton(product){
const cardButton = document.createElement("a");
cardButton.innerText="Voir"
cardButton.classList.add("btn", "btn-primary");
/*viewButton.href = `./pages/details.html?id=${id}`;*/
return cardButton;
}