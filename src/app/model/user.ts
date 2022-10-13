export class User {
    id!: string;
    nom!: String;
    prenom!: String;
    email!:String ;
    password!:String;
    sexe!: String ;
    token!: String ;
    role!: String ;

    constructor(nom:string,prenom:string,email:string,password:string,sexe:string,role:string){
        this.nom=nom;
        this.prenom=prenom;
        this.email=email;
        this.password=password;
        this.sexe=sexe;
        this.role=role;
    }
    }