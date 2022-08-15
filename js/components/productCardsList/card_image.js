export function CardImage(product) {
  const cardImage = document.createElement("img");
  cardImage.classList.add("card-img-top");
  cardImage.src = product.imageUrl;
  return cardImage;
}
