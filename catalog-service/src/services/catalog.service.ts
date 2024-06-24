import { IcatalogRepository } from "../interface/catalog.interface";

export class CatalogService {
  private _repository: IcatalogRepository;

  constructor(repository: IcatalogRepository) {
    this._repository = repository;
  }

  createProduct(input: any) {}

  updateProduct(input: any) {}

  getProducts(limit: number, offset: number) {}

  getProduct(id: number) {}

  deleteProduct(id: number) {}
}
