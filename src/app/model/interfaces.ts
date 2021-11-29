export interface Product {
  id: string;
  description: string;
  price: number;
  quantity: number;
  img: string;
}

export interface User {
  id: string,
  username: string,
  lastname: string,
  email: string,
  cpf: string,
  rg: string,
  cep: string,
  address: string,
  city: string,
  state: string,
  password: string
}