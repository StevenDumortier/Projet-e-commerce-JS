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

  fetchProductsByCategory(category) {
    console.log(this.url + "?category=" + category)
    return Api.get(this.url + "?category=" + category).then(function (response) {
      return response.data;
    });
  }
}
