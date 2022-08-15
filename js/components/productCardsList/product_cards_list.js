import { FilterCardList } from "../navBar/searchBar/filterCardList.js";
import { ProductCard } from "./product_card.js";

export class ProductCardsList {
  constructor(products) {
    this.$productCardsList = document.querySelector(".productsList");
    this.products = products;
  }

  render() {

    for (let product of this.products) {
      console.log(product)
      const card = ProductCard(product);
      this.$productCardsList.appendChild(card);
      console.log((card.innerText));
      FilterCardList(product,card);
      

      }
      
  

    }
    
  }

