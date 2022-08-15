import { Api } from "./api.config.js";

export class ProductsDetailsService{

  constructor(){
    this.url = "/products"
  }

fetchProductsDetails(id) {
    console.log(this.url + "/" + id)
    return Api.get(this.url + "/"+ id).then(function (response) {
      return response.data;
    });
  }

}

