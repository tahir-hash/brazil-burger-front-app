import { Boisson } from "./Boisson";

export interface Taille
{
  id?: number;
  prix?: number;
  libelle?: string;
  boissonTailles?:Boisson[]
}