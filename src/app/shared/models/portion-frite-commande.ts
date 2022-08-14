import { Produit } from "./produit"

export interface PortionFriteCommande {
    quantite: number
    prix?:number
    nom?:string
    portionFrite:Produit
}
