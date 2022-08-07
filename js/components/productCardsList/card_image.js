export function CardImage(product) {
  const cardImage = document.createElement("img");
  cardImage.classList.add("card-img-top", "h-100");
  cardImage.src = product.imageUrl;
  return cardImage;
}
