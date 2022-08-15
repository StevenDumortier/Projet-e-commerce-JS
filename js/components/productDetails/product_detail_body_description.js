export function ProductDetailBodyDescription(product){
    const productDetailBodyDescription = document.createElement("p")
    productDetailBodyDescription.innerText=product.description;
    return productDetailBodyDescription;
}