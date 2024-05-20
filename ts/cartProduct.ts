import { Product } from "./product.js";

export type CartProduct = {
   quantity: number;
} & Product;

