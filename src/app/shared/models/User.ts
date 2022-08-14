import { Role } from "./Role";

export interface User{
    id? : number;
    nom?: string;
    prenom?: string;
    adresse?: string;
    telephone?: string;
    login?: string;
    password?: string;
    token?: string;
    roles:Role
}
