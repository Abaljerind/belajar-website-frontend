export type ID = string | number;

export interface Seller {
  id: ID;
  name: string;
  address?: string;
}
