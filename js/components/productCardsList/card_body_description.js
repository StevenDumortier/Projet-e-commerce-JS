export function CardDescription(product){
const cardDescription = document.createElement("p");
cardDescription.classList.add("card-text");
cardDescription.innerHTML=product.price + " €";
return cardDescription;
}

