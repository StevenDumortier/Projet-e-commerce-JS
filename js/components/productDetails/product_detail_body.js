import { ProductDetailBodyAmoutInput } from "./product_detail_body_amout_input.js";
import { ProductDetailBodyAmoutLabel } from "./product_detail_body_amout_label.js";
import { ProductDetailBodyDescription } from "./product_detail_body_description.js";
import { ProductDetailBodyPrice } from "./product_detail_body_price.js";
import { ProductDetailBodySubtitle } from "./product_detail_body_subtitle.js";

export function ProductDetailBody(product){

    const amoutInput = new ProductDetailBodyAmoutInput;
    const amoutInputLabel = new ProductDetailBodyAmoutLabel;
    const subtitle = new ProductDetailBodySubtitle;
    const price = new ProductDetailBodyPrice(product);
    const describe = new ProductDetailBodyDescription(product);
    const productDetailBody = document.createElement("div");
    productDetailBody.append(subtitle,describe,price,amoutInputLabel,amoutInput);
    return productDetailBody;

}