import { ProductDetailBody } from "./product_detail_body.js";
import { ProductDetailPhoto } from "./product_detail_photo.js";
import { ProductDetailTitle } from "./product_detail_title.js";


export class ProductDetail{

    constructor(product){
    this.productDetails = document.querySelector(".productDetails");
    this.product = product 
    }

    render(){
        const productDetailTitle = ProductDetailTitle(this.product);
        const productDetailsBody = ProductDetailBody(this.product)
        const productDetailPhoto = ProductDetailPhoto(this.product)
        this.productDetails.innerText="";
        this.productDetails.append(productDetailTitle,productDetailPhoto,productDetailsBody);
    }
    
}