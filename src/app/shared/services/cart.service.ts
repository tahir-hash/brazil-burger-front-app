import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BoissonTailleCommande } from '../models/boisson-taille-commande';
import { BurgerCommande } from '../models/burger-commande';
import { Cart } from '../models/cart';
import { MenuCommande } from '../models/menu-commande';
import { PortionFriteCommande } from '../models/portion-frite-commande';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  private panierSave: Cart = {
    burgerCommandes: [],
    portionFriteCommandes: [],
    boissonTailleCommandes: [],
    menuCommandes: [],
    zone: {},
    all: []
  }
  Panier = new BehaviorSubject<Cart>(this.panierSave);

  cart: Produit[] = [];
  numOfItems = new BehaviorSubject<Produit[]>([]);
  constructor() {
    const ls = JSON.parse(localStorage.getItem('cart') || 'null')
    if (ls) {
      this.Panier.next(ls)
    }
  }

  addBurger(burger: BurgerCommande) {
    let ls = JSON.parse(localStorage.getItem('cart') || 'null')
    let found = false
    this.Panier.value.burgerCommandes?.map(data => {
      if (data.burger?.id == burger.burger?.id) {
        data.quantite = Number(data.quantite)
        data.quantite += Number(burger.quantite)
        found = true
      }
      return data
    })

    if (!found) {
      localStorage.setItem('cart', JSON.stringify({
        ...this.Panier.value,
        burgerCommandes: this.Panier.value.burgerCommandes?.concat(burger)
      }));
      return this.Panier.next(
        {
          ...this.Panier.value,
          burgerCommandes: this.Panier.value.burgerCommandes?.concat(burger)

        }
      )
    }
    else {
      localStorage.setItem('cart', JSON.stringify({
        ...this.Panier.value,
        burgerCommandes: this.Panier.value.burgerCommandes
      }));
      this.Panier.next
    }

  }


  addMenu(menu: MenuCommande) {
    let ls = JSON.parse(localStorage.getItem('cart') || 'null')
    let found = false
    this.Panier.value.menuCommandes?.map(data => {
      if (data.menu?.id == menu.menu?.id) {
        data.quantite = Number(data.quantite)
        data.quantite += Number(menu.quantite)
        found = true
      }
      return data
    })

    if (!found) {
      localStorage.setItem('cart', JSON.stringify({
        ...this.Panier.value,
        menuCommandes: this.Panier.value.menuCommandes?.concat(menu)
      }));
      return this.Panier.next(
        {
          ...this.Panier.value,
          menuCommandes: this.Panier.value.menuCommandes?.concat(menu)

        }
      )
    }
    else {
      localStorage.setItem('cart', JSON.stringify({
        ...this.Panier.value,
        menuCommandes: this.Panier.value.menuCommandes
      }));
      this.Panier.next
    }

  }

  addBoissonTaille(tab: BoissonTailleCommande[]) {
    let found = false
    this.Panier.value.boissonTailleCommandes?.map(data => {
      tab.map(data1 => {
        if (data.boissonTaille.id == data1.boissonTaille.id) {
          data.quantite = Number(data.quantite)
          data.quantite += Number(data1.quantite)   
          found = true
        }
      })
      return data
    })
    ////////////////////////
    if (!found) {
      tab.map(data=>{
        localStorage.setItem('cart', JSON.stringify({
          ...this.Panier.value,
          boissonTailleCommandes: this.Panier.value.boissonTailleCommandes?.concat(data)
        }));
        this.Panier.next(
          {
            ...this.Panier.value,
            boissonTailleCommandes: this.Panier.value.boissonTailleCommandes?.concat(data)
          }
        )
      })

    }
    else {
      localStorage.setItem('cart', JSON.stringify({
        ...this.Panier.value,
        boissonTailleCommandes: this.Panier.value.boissonTailleCommandes 
      }));
       return this.Panier.next(
        {
          ...this.Panier.value,
          boissonTailleCommandes: this.Panier.value.boissonTailleCommandes
        }
      )
    }

  }

  addfrites(tab: PortionFriteCommande[]) {
    let found = false
    this.Panier.value.portionFriteCommandes?.map(data => {
      tab.map(data1 => {
        if (data.portionFrite.id == data1.portionFrite.id) {
          data.quantite = Number(data.quantite)
          data.quantite += Number(data1.quantite)   
          found = true
        }
      })
      return data
    })
    ////////////////////////
    if (!found) {
      tab.map(data=>{
        localStorage.setItem('cart', JSON.stringify({
          ...this.Panier.value,
          portionFriteCommandes: this.Panier.value.portionFriteCommandes?.concat(data)
        }));
        this.Panier.next(
          {
            ...this.Panier.value,
            portionFriteCommandes: this.Panier.value.portionFriteCommandes?.concat(data)
          }
        )
      })

    }
    else {
      localStorage.setItem('cart', JSON.stringify({
        ...this.Panier.value,
        portionFriteCommandes: this.Panier.value.portionFriteCommandes 
      }));
       return this.Panier.next(
        {
          ...this.Panier.value,
          portionFriteCommandes: this.Panier.value.portionFriteCommandes
        }
      )
    }

  }
  remove(object: any) {
    if (object.type == 'burger') {
      this.Panier.value.burgerCommandes?.map((data, i) => {
        if (data.burger.id == object?.id) {
          this.Panier.value.burgerCommandes?.splice(i, 1)
        }
      })
      localStorage.setItem('cart', JSON.stringify({
        ...this.Panier.value,
        burgerCommandes: this.Panier.value.burgerCommandes
      }));
      return this.Panier.next({
        ...this.Panier.value,
        burgerCommandes: this.Panier.value.burgerCommandes
      })
    }
    if (object.type == 'menu') {
      this.Panier.value.menuCommandes?.map((data, i) => {
        if (data.menu.id == object?.id) {
          this.Panier.value.menuCommandes?.splice(i, 1)
        }
      })
      localStorage.setItem('cart', JSON.stringify({
        ...this.Panier.value,
        menuCommandes: this.Panier.value.menuCommandes
      }));
      return this.Panier.next({
        ...this.Panier.value,
        menuCommandes: this.Panier.value.menuCommandes
      })
    }
    if(object.boissonTaille){
      this.Panier.value.boissonTailleCommandes?.map((data, i) => {
        if (data.boissonTaille.id == object?.boissonTaille.id) {
          this.Panier.value.boissonTailleCommandes?.splice(i, 1)
        }
      })
      localStorage.setItem('cart', JSON.stringify({
        ...this.Panier.value,
        boissonTailleCommandes: this.Panier.value.boissonTailleCommandes
      }));
      return this.Panier.next({
        ...this.Panier.value,
        boissonTailleCommandes: this.Panier.value.boissonTailleCommandes
      })
    }
    if(object.portionFrite){
      this.Panier.value.portionFriteCommandes?.map((data, i) => {
        if (data.portionFrite.id == object?.portionFrite.id) {
          this.Panier.value.portionFriteCommandes?.splice(i, 1)
        }
      })
      localStorage.setItem('cart', JSON.stringify({
        ...this.Panier.value,
        portionFriteCommandes: this.Panier.value.portionFriteCommandes
      }));
      return this.Panier.next({
        ...this.Panier.value,
        portionFriteCommandes: this.Panier.value.portionFriteCommandes
      })
    }
    return this.Panier.next
  }

  getMontant() {
    let total = 0
    this.Panier.value.burgerCommandes?.map(data => {
      if (data.burger.prix) {
        total += data.burger.prix * data.quantite;
      }
    })
    this.Panier.value.menuCommandes?.map(data => {
      if (data.menu.prix) {
        total += data.menu.prix * data.quantite;
      }
    })

    this.Panier.value.boissonTailleCommandes?.map(data => {
      if (data.prixTaille) {
        total += data.prixTaille * data.quantite;
      }
    })
    this.Panier.value.portionFriteCommandes?.map(data => {
      if (data.prix) {
        total += data.prix * data.quantite;
      }
    })
    return total;
  }

  emptyCart(panier: any) {
    this.panierSave = {
      burgerCommandes: [],
      portionFriteCommandes: [],
      boissonTailleCommandes: [],
      menuCommandes: [],
      zone: {},
      all: []
    }
    localStorage.removeItem("cart");
    return panier = new BehaviorSubject<Cart>(this.panierSave);
  }

}
