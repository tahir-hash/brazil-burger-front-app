import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Login } from 'src/app/shared/models/Auth';
import { AuthService } from 'src/app/shared/services/auth.service';
import { TokenService } from 'src/app/shared/services/token.service';

@Component({
  selector: 'mtm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:Login={
    login:'',
    password:'',
  }
  constructor(private auth:AuthService,private router: Router, private  toast: NgToastService
    ,private token:TokenService) { }

  ngOnInit(): void {
  }
  
  onSubmit(){
    this.auth.login(this.form).subscribe(
      data=>{
        this.token.saveToken(data.token);
        this.router.navigate(['/client/products/catalogue']);
        this.toast.success({detail:"Connexion Reussie", summary:"Veuillez faire vos achats",position:"bl", duration:5000})
      },
      err=>{
        this.toast.error({detail:"Failed", summary:"Erreur de connexion", duration:5000})

      }
    )
  }
}
