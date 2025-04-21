import mongoose, { Document, Schema } from "mongoose";

export interface IProducto extends Document {
    nombre: string;
    descripcion: string;
    precio: number;
    stock: number;
    createAt: Date;
    updateAt: Date;
}

const ProductoSchema: Schema = new Schema({
    nombre: { type: String, require: true },
    descripcion: { type: String, require: true },
    precio: { type: Number, require: true },
    stock: { type: Number, require: true, default: 0 }
},
    { timestamps: true }
);

export default mongoose.model<IProducto>('Producto', ProductoSchema)