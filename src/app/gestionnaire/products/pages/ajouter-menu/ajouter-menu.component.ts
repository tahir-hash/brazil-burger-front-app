import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { MenuService } from 'src/app/shared/services/menu.service';
import { ProduitService } from 'src/app/shared/services/produit.service';

@Component({
  selector: 'mtm-ajouter-menu',
  templateUrl: './ajouter-menu.component.html',
  styleUrls: ['./ajouter-menu.component.css']
})
export class AjouterMenuComponent implements OnInit {

  panel = true;
  panelT = false;
  panelF = false;
  menu: any;
  object: any;
  constructor(private menuServ: MenuService, private fb: FormBuilder,
    private produitServ: ProduitService,
    public router: Router,
     private toast: NgToastService) { }

  ngOnInit(): void {
    this.menuServ.all$().subscribe(data => {
      this.object = data
    })
    this.menu = this.fb.group({
      nom: [null, Validators.required],
      imageFile: [null],
      fileSource: [null],
      description: [null, Validators.required],
      menuBurgers: this.fb.array([
        this.fb.group({
          burger: ['', Validators.required],
          quantite: ['', Validators.required]
        })
      ]),
      menuTailles: this.fb.array([
        this.fb.group({
          taille: ['', Validators.required],
          quantite: ['', Validators.required]
        })
      ]),
      menuPortionFrites: this.fb.array([
        this.fb.group({
          portionFrite: ['', Validators.required],
          quantite: ['', Validators.required]
        })
      ])
    })
  }
  get nom() { return this.menu.get('nom') }
  get imageFile() { return this.menu.get('imageFile') }
  get description() { return this.menu.get('description') }
  get prix() { return this.menu.get('prix') }
  get menuBurgers() { return this.menu.controls['menuBurgers'] as FormArray }
  get menuTailles() { return this.menu.controls['menuTailles'] as FormArray }
  get menuPortionFrites() { return this.menu.controls['menuPortionFrites'] as FormArray }
  get f() {
    return this.menu.controls;
  }

  add(type: string) {
    if (type == 'burger') {
      const burgerForm = this.fb.group({
        burger: ['', Validators.required],
        quantite: ['', Validators.required]
      });
      this.menuBurgers.push(burgerForm);
    }
    if (type == 'taille') {
      const tailleForm = this.fb.group({
        burger: ['', Validators.required],
        quantite: ['', Validators.required]
      });
      this.menuTailles.push(tailleForm);
    }
    if (type == 'frites') {
      const friteForm = this.fb.group({
        portionFrite: ['', Validators.required],
        quantite: ['', Validators.required]
      });
      this.menuPortionFrites.push(friteForm);
    }
  }


  delete(index: number, type: string) {
    if (type == 'burger') {
      this.menuBurgers.removeAt(index);
    }
    if (type == 'tailles') {
      this.menuTailles.removeAt(index);
    }
    if (type == 'frites') {
      this.menuPortionFrites.removeAt(index);
    }
  }

  submitData() {
    this.menu.value.menuBurgers.map((burg: any) => {
      burg.quantite = burg.quantite,
        burg.burger = {
          id: Number(burg.burger)
        }
    })
    this.menu.value.menuTailles.map((taille: any) => {
      taille.quantite = taille.quantite,
        taille.taille = {
          id: Number(taille.taille)
        }
    })
    this.menu.value.menuPortionFrites.map((portion: any) => {
      portion.quantite = portion.quantite,
        portion.portionFrite = {
          id: Number(portion.portionFrite)
        }
    })

    let formData:FormData = new FormData();
    formData.append('nom',this.menu.get('nom').value)
    formData.append('description',this.menu.get('description').value)
    formData.append('menuBurgers',JSON.stringify(this.menu.get('menuBurgers').value))
    formData.append('menuTailles',JSON.stringify(this.menu.get('menuTailles').value))
    formData.append('menuPortionFrites',JSON.stringify(this.menu.get('menuPortionFrites').value))
    formData.append('imageFile',this.menu.get('imageFile').value)
    formData.append('prix','0')
    
    this.produitServ.saveMenu(formData)
    this.router.navigate(['/admin/products/menu']);
    this.toast.success({ detail: "Ajout réussi", summary: "Menu ajouter avec succés!!!", position: 'bl', duration: 5000 })
    
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.menu.patchValue({
       imageFile: file
      });
      this.menu.get('imageFile').updateValueAndValidity();
    }
  }


  /* convetr
   */

  

}

