// src/services/producto.service.ts
import { IProducto } from '../models/producto.model';
import { IProductoRepository, ProductoRepository } from '../repositories/producto.repository';

export class ProductoService {
  private productoRepository: IProductoRepository;

  constructor(productoRepository?: IProductoRepository) {
    this.productoRepository = productoRepository || new ProductoRepository();
  }

  async getAllProductos(): Promise<IProducto[]> {
    return await this.productoRepository.findAll();
  }

  async getProductoById(id: string): Promise<IProducto | null> {
    return await this.productoRepository.findById(id);
  }

  async createProducto(productoData: Partial<IProducto>): Promise<IProducto> {
    return await this.productoRepository.create(productoData);
  }

  async updateProducto(id: string, productoData: Partial<IProducto>): Promise<IProducto | null> {
    return await this.productoRepository.update(id, productoData);
  }

  async deleteProducto(id: string): Promise<boolean> {
    return await this.productoRepository.delete(id);
  }
}