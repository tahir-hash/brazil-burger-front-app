import { Produit } from "./produit"

export interface Boisson
{
  id?: number;
  libelle?: string
  prix?: number
  stock?:number
  boisson:Produit
}