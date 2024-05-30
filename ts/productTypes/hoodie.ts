import { Product } from "../product";

type Size = 'S' | 'M' | 'L';

export type Hoodie = {
   hoodieSize: Size;
} & Product;

export default Hoodie;