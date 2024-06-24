import { Product } from "../models/product.model";

export interface IcatalogRepository {
  create(data: Product): Promise<Product>;
  update(data: Product): Promise<Product>;
  delete(id: any): void;
  find(): Promise<Product[]>;
  findOne(id: number): Promise<Product>;
}
