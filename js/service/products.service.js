import { Api } from "./api.config.js";

export class ProductsService {
  constructor() {
    this.url = "/products";
  }

  fetchProducts() {
    return Api.get(this.url).then(function (response) {
      return response.data;
    });
  }

  fetchProductsById(id) {
    return Api.get(this.url + "/" + id).then(function (response) {
      return response.data;
    });
  }
}
