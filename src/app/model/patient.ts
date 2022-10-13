import { User } from "./user";

export class Patient extends User{
    date_naiss!: string;
    numtel!: Number ;
    constructor(nom:string,prenom:string,email:string,password:string,sexe:string,role:string,date_naiss:string,numtel:number){
        super(nom,prenom,email,password,sexe,role);
        this.date_naiss=date_naiss;
        this.numtel=numtel;
    }
}