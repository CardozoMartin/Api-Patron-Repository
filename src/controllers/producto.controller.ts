// src/controllers/producto.controller.ts
import { Request, Response } from 'express';
import { ProductoService } from '../services/producto.service';

export class ProductoController {
  private productoService: ProductoService;

  constructor() {
    this.productoService = new ProductoService();
  }

  getAllProductos = async (req: Request, res: Response): Promise<void> => {
    try {
      const productos = await this.productoService.getAllProductos();
      res.status(200).json(productos);
    } catch (error: unknown) {
      res.status(500).json({ 
        message: error instanceof Error ? error.message : 'Error desconocido al obtener productos'
      });
    }
  };

  getProductoById = async (req: Request, res: Response): Promise<void> => {
    try {
      const producto = await this.productoService.getProductoById(req.params.id);
      if (!producto) {
        res.status(404).json({ message: 'Producto no encontrado' });
        return;
      }
      res.status(200).json(producto);
    } catch (error: unknown) {
      res.status(500).json({ 
        message: error instanceof Error ? error.message : 'Error desconocido al obtener el producto'
      });
    }
  };

  createProducto = async (req: Request, res: Response): Promise<void> => {
    try {
      const producto = await this.productoService.createProducto(req.body);
      res.status(201).json(producto);
    } catch (error: unknown) {
      res.status(400).json({ 
        message: error instanceof Error ? error.message : 'Error desconocido al crear el producto'
      });
    }
  };

  updateProducto = async (req: Request, res: Response): Promise<void> => {
    try {
      const producto = await this.productoService.updateProducto(req.params.id, req.body);
      if (!producto) {
        res.status(404).json({ message: 'Producto no encontrado' });
        return;
      }
      res.status(200).json(producto);
    } catch (error: unknown) {
      res.status(400).json({ 
        message: error instanceof Error ? error.message : 'Error desconocido al actualizar el producto'
      });
    }
  };

  deleteProducto = async (req: Request, res: Response): Promise<void> => {
    try {
      const success = await this.productoService.deleteProducto(req.params.id);
      if (!success) {
        res.status(404).json({ message: 'Producto no encontrado' });
        return;
      }
      res.status(200).json({ message: 'Producto eliminado correctamente' });
    } catch (error: unknown) {
      res.status(500).json({ 
        message: error instanceof Error ? error.message : 'Error desconocido al eliminar el producto'
      });
    }
  };
}