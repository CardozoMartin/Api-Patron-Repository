// src/routes/producto.routes.ts
import { Router } from 'express';
import { ProductoController } from '../controllers/producto.controller';

const router = Router();
const productoController = new ProductoController();

router.get('/', productoController.getAllProductos);
router.get('/:id', productoController.getProductoById);
router.post('/', productoController.createProducto);
router.put('/:id', productoController.updateProducto);
router.delete('/:id', productoController.deleteProducto);

export default router;