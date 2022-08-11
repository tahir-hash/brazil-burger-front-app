import { BoissonTaille } from "./boisson-taille"

export interface Menu {
    id: number
    nom?: string;
    type?: string;
    image?: Blob;
    prix?: number;
    description?: string;
    commandeMenuBoissonTailles: BoissonTaille[]
}
