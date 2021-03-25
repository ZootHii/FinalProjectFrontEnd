export interface Product { // public = export, models = DTOs
  productId: number;
  categoryId: number;
  productName: string;
  unitsInStock: number;
  unitPrice: number;
}
