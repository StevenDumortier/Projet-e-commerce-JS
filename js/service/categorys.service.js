import { Api } from "./api.config.js";

export class CategorysService {
  constructor() {
    this.url = "/categories";
  }

  fetchCategorys() {
    return Api.get(this.url).then(function (response) {
      return response.data;
    });
  }
}
