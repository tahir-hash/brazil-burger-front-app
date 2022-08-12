import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    private produitServ:ProduitService) { }

  ngOnInit(): void {
    this.menuServ.all$().subscribe(data => {
      this.object = data
    })
    this.menu = this.fb.group({
      nom: [null,Validators.required],
      imageFile: [null],
      fileSource: [null],
      description: [null,Validators.required],
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
  get nom(){return this.menu.get('nom')}
  get imageFile(){return this.menu.get('imageFile')}
  get description(){return this.menu.get('description')}
  get prix(){return this.menu.get('prix')}
  get menuBurgers() { return this.menu.controls['menuBurgers'] as FormArray }
  get menuTailles() { return this.menu.controls['menuTailles'] as FormArray }
  get menuPortionFrites() { return this.menu.controls['menuPortionFrites'] as FormArray }
  get f() {
    return this.menu.controls;
  }
 
  add(type: string) {
    if(type=='burger'){
       const burgerForm = this.fb.group({
      burger: ['', Validators.required],
      quantite: ['', Validators.required]
    });
    this.menuBurgers.push(burgerForm);
    }
   if(type=='taille'){
    const tailleForm = this.fb.group({
      burger: ['', Validators.required],
      quantite: ['', Validators.required]
    });
    this.menuTailles.push(tailleForm);
   }
   if(type=='frites'){
    const friteForm = this.fb.group({
      portionFrite: ['', Validators.required],
      quantite: ['', Validators.required]
    });
    this.menuPortionFrites.push(friteForm);
   }
  }


  delete(index:number,type:string) {
   if(type=='burger'){
    this.menuBurgers.removeAt(index);
   }
   if(type=='tailles'){
    this.menuTailles.removeAt(index);
   }
   if(type=='frites'){
    this.menuPortionFrites.removeAt(index);
   }
  }

  submitData() {
    this.menu.value.menuBurgers.map((burg:any)=>{
      burg.quantite=burg.quantite,
      burg.burger={
        id:Number(burg.burger)
      }
    })
    this.menu.value.menuTailles.map((taille:any)=>{
      taille.quantite=taille.quantite,
      taille.taille={
        id: Number(taille.taille)
      }
    })
    this.menu.value.menuPortionFrites.map((portion:any)=>{
      portion.quantite=portion.quantite,
      portion.portionFrite={
        id: Number(portion.portionFrite)
      }
    })
    //this.menu.value.prix=0
    this.menu.value.imageFile=this.menu.value.fileSource
    this.produitServ.saveMenu(this.menu.value).subscribe(
      err=>console.log(err)
    )
    console.log(this.menu.value);
  }

  onFileChange(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.menu.patchValue({
        fileSource: file
      });
    }
  }

  
}

