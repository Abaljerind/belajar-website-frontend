export type ID = string | number; // contoh type alias untuk union type

export type Category = {
  id: ID; // sama dengan => id: string | number;
  name: string;
  description?: string; // optional properties
};

export type Product = {
  id: ID; // sama dengan => id: string | number;
  name: string;
  price: number;
  category: Category; // ini Category dari atas
  description?: string;
};
