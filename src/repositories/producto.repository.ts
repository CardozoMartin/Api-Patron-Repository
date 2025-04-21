// src/repositories/producto.repository.ts
import Producto, { IProducto } from '../models/producto.model';

export interface IProductoRepository {
  findAll(): Promise<IProducto[]>;
  findById(id: string): Promise<IProducto | null>;
  create(productoData: Partial<IProducto>): Promise<IProducto>;
  update(id: string, productoData: Partial<IProducto>): Promise<IProducto | null>;
  delete(id: string): Promise<boolean>;
}

export class ProductoRepository implements IProductoRepository {
  async findAll(): Promise<IProducto[]> {
    return await Producto.find();
  }

  async findById(id: string): Promise<IProducto | null> {
    return await Producto.findById(id);
  }

  async create(productoData: Partial<IProducto>): Promise<IProducto> {
    const producto = new Producto(productoData);
    return await producto.save();
  }

  async update(id: string, productoData: Partial<IProducto>): Promise<IProducto | null> {
    return await Producto.findByIdAndUpdate(id, productoData, { new: true });
  }

  async delete(id: string): Promise<boolean> {
    const result = await Producto.findByIdAndDelete(id);
    return result !== null;
  }
}