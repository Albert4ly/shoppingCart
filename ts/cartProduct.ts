import { Product } from "./product.js";

export type CartProduct = {
   name: string;
   quantity: number;
} & Product;

