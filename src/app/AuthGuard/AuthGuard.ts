import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import {TokenService} from "../../app/shared/services/token.service"

export class AuthGuard implements  CanActivate{
    constructor(private token:TokenService,private router:Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
       if(this.token.isConnect()){
        return true;
       }
       else{
        this.router.navigate(["/securite/login"])
        return false;
       }
    }

}