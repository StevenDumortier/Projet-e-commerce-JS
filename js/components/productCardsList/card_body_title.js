export function CardTitle(product){
const cardTitle = document.createElement("h5");
cardTitle.classList.add("card-title");
cardTitle.innerHTML=product.name; 
return cardTitle; 
}

