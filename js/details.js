
import { ProductDetail } from "./components/productDetails/product_detail.js";
import { ProductsDetailsService } from "./service/productsDetails.service.js";

class DetailsPage{
constructor(){
   this.productsDetailsService= new ProductsDetailsService;  
}

async mainDetails(){
    const urlParam = new URLSearchParams(location.search);
    const id = urlParam.get("id");
    this.product = await this.productsDetailsService.fetchProductsDetails(id)
    const productDetails = new ProductDetail(this.product);
    productDetails.render();
}

}
const detailsPage = new DetailsPage;
detailsPage.mainDetails();