
export interface Produit {
  id?: number;
  type?: string;
  image?: Blob;
  nom?: string;
  prix?: number;
  description?: string;
  menu?:any
  boissons?:any
  frites?:any
  burger?:any,
  qty?: number
}

