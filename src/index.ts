// src/app.ts
import express, { Application } from 'express';
import dotenv from 'dotenv';
import connectDB from './config/database';
import productoRoutes from './routes/producto.routes';

dotenv.config();

// Conectar a la base de datos
connectDB();

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api/productos', productoRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API de Productos funcionando correctamente');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

export default app;