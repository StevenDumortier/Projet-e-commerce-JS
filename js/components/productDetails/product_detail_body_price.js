export function ProductDetailBodyPrice (product){
    const productDetailPrice = document.createElement("p");
    productDetailPrice.innerText=product.price + " €";
    return productDetailPrice;
}