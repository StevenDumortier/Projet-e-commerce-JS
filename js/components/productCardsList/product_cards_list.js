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
      console.log((card.innerText))

        const search = document.getElementById("search");
        search.addEventListener("keyup", function(e) {
        const searchString = e.target.value.toLowerCase();
       // console.log(searchString)
       //const isVisible = card.innerText.toLowerCase().includes(searchString)
      const isVisible = product.name.toLowerCase().includes(searchString)
      //  console.log((product.name))
        card.classList.toggle("hide",!isVisible)
      }
      )






      }
      
  

    }
    
  }

