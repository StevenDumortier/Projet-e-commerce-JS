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
  
    const urlParam = new URLSearchParams(location.search);
    const category = urlParam.get("category");

    if(!category){
    this.products = await this.productsService.fetchProducts();
    }
    else{
      this.products = await this.productsService.fetchProductsByCategory(category);
    }
      
   
    const productCardsList = new ProductCardsList(this.products);
    productCardsList.render();
  }
}

const homePage = new HomePage();
homePage.mainCategorysDropdown();
homePage.mainProductsList();

