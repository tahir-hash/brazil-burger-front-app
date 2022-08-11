import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'mtm-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  register:any
  constructor(private auth:AuthService,private router:Router,private toast: NgToastService) { }

  ngOnInit(): void {
    this.register= new FormGroup({
      "nom": new FormControl(null,[Validators.required]),
      "prenom": new FormControl(null,[Validators.required]),
      "adresse": new FormControl(null,[Validators.required]),
      "telephone":  new FormControl(null,[Validators.required,
        Validators.maxLength(9),Validators.minLength(9),Validators.pattern(/^[0-9]+$/)]),
      "password": new FormControl(null,[Validators.required]),
      "login": new FormControl(null,[Validators.required,Validators.email]),
      "passwordC": new FormControl(null,[Validators.required]),
    })
  }
  submitData(){
    this.register.value.telephone = Number(this.register.value.telephone)
    this.auth.signIn(this.register.value).subscribe(
      data=>{
        this.router.navigate(['/client/products/catalogue']);
        this.toast.warning({detail:"Confirm Email", summary:"Veuillez confirmer votre email!!",position:'tl', duration:5000})
      },
      err=>{
        console.log(err);
        this.toast.error({detail:"Failed", summary:"Erreur d'inscription",position:'tl', duration:5000})

      }
    )
  }

  get nom(){return this.register.get('nom')}
  get prenom(){return this.register.get('prenom')}
  get adresse(){return this.register.get('adresse')}
  get telephone(){return this.register.get('telephone')}
  get login(){return this.register.get('login')}
  get password(){return this.register.get('password')}
  get passwordC(){return this.register.get('passwordC')}

}
