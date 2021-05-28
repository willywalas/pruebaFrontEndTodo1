import { Persona } from "./Persona";

export class Producto{
    id!: number;
    descripcion!: String;
    imagen!: String;
    nombre!: String;
    precio!: number;
    stock!: number;
    tipoProducto!: Persona;
}