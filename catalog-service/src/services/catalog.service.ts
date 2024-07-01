import { IcatalogRepository } from "../interface/catalog.interface";

export class CatalogService {
  private _repository: IcatalogRepository;

  constructor(repository: IcatalogRepository) {
    this._repository = repository;
  }

  async createProduct(input: any) {
    const data = await this._repository.create(input);

    if (!data.id) throw new Error("Unable to create product");

    return data;
  }

  async updateProduct(input: any) {
    const data = await this._repository.update(input);

    //emit event to update record in elastic search

    return data;
  }

  // we will get product from elastic search
  async getProducts(limit: number, offset: number) {
    const products = await this._repository.find(limit, offset);
    return products;
  }

  async getProduct(id: number) {
    const product = await this._repository.findOne(id);
    return product;
  }

  async deleteProduct(id: number) {
    const productId = await this._repository.delete(id);
    //delete record from elastic search
    return productId;
  }
}
