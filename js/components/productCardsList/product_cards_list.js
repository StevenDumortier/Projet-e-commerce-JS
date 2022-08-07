import { ProductCard } from "./product_card.js";

export class ProductCardsList {
  constructor(products) {
    this.$productCardsList = document.querySelector(".productsList");
    this.products = products;
  }

  render() {
    for (let product of this.products) {
      const card = ProductCard(product);
      this.$productCardsList.appendChild(card);
      console.log(product)
    }
  }
}