export function ProductDetailTitle(product){
    const productDetailTitle = document.createElement("h1");
    console.log(product)
    productDetailTitle.innerText="Détails de "+product.name;
    return productDetailTitle;
}