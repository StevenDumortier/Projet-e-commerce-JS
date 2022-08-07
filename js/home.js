import { CategoryDropdown } from "./components/navBar/categorysDropdown/categorys_dropdown.js";
import { ProductCardsList } from "./components/productCardsList/product_cards_list.js";
import { CategorysService } from "./service/categorys.service.js";
import { ProductsService } from "./service/products.service.js";

class HomePage {
  constructor() {
    this.categorysService = new CategorysService();
    this.categorysDropdown = [];
    this.productsService = new ProductsService();
    this.productCardsList = [];
  }

  async mainCategorysDropdown() {
    this.categorys = await this.categorysService.fetchCategorys();
    const categorysDropdown = new CategoryDropdown(this.categorys);
    categorysDropdown.render();
  }

  async mainProductsList() {
    this.products = await this.productsService.fetchProducts();
    const productCardsList = new ProductCardsList(this.products);
    productCardsList.render();
  }
}

const homePage = new HomePage();
homePage.mainCategorysDropdown();
homePage.mainProductsList();






/*const productsURL = DATABASE_URL+"/products"
//afficher la liste des produits

const search = new p

const productListContenair = document.querySelector(".productList");

axios
    .get(productsURL)
    .then(function (response) {
        for (let product of response.data) {

            console.log(product)
            const productListColumn = document.createElement("div")
            productListColumn.classList.add("col")

            const card = document.createElement("div");
            card.classList.add("card" ,"h-100");
            card.style.width = "18rem";
            const cardImage = document.createElement("img");
            cardImage.classList.add("card-img-top","h-100");
            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            const cardTitle = document.createElement("h5");
            cardTitle.classList.add("card-title");
            const cardText = document.createElement("p");
            cardText.classList.add("card-text");
            const cardButton = document.createElement("a");
            cardButton.innerText="Voir"
            cardButton.classList.add("btn", "btn-primary");
            cardImage.src = product.imageUrl;
            cardTitle.innerHTML=product.name;
            cardText.innerHTML=product.price + " €";
            cardBody.append(cardTitle,cardText,cardButton)
            card.append(cardImage,cardBody)
            productListColumn.append(card)
            productListContenair.appendChild(productListColumn);
            
        }})*/

/*  selectCategory.addEventListener("click", function(event){
                        event.preventDefault();
                        productListContenair.innerHTML="";
                        




                   for (let product of response.data) {
                        alert(product)
                        const productListColumn = document.createElement("div")
                        productListColumn.classList.add("col")
            
                        const card = document.createElement("div");
                        card.classList.add("card" ,"h-100");
                        card.style.width = "18rem";
                        const cardImage = document.createElement("img");
                        cardImage.classList.add("card-img-top","h-100");
                        const cardBody = document.createElement("div");
                        cardBody.classList.add("card-body");
                        const cardTitle = document.createElement("h5");
                        cardTitle.classList.add("card-title");
                        const cardText = document.createElement("p");
                        cardText.classList.add("card-text");
                        const cardButton = document.createElement("a");
                        cardButton.innerText="Voir"
                        cardButton.classList.add("btn", "btn-primary");
                        cardImage.src = product.imageUrl;
                        cardTitle.innerHTML=product.name;
                        cardText.innerHTML=product.price + " €";
                        alert(product)
                        if(selectCategory.value == product.category_id){
                             cardBody.append(cardTitle,cardText,cardButton)
                        card.append(cardImage,cardBody)
                        productListColumn.append(card)
                        productListContenair.appendChild(productListColumn); 
                        }
                      
                    }
                })  
            }})*/
