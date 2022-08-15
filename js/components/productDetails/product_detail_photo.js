export function ProductDetailPhoto(product){
    const productDetailPhoto = document.createElement("img");
    console.log(product.imageUrl);
    productDetailPhoto.src=product.imageUrl;
    return productDetailPhoto; 
}