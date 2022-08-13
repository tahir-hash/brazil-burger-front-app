import { BoissonTaille } from "./boisson-taille"

export interface BoissonTailleCommande {
    quantite: number
    idTaille?: number,
    libTaille?: string,
    prixTaille?: number
    boissonTaille:{
        id: number,
        nom?: string
    }
}
