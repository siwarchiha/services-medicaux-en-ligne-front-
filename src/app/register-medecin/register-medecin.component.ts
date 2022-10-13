import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { AuthentificationService } from '../services/authentification.service';
import { CategorieService } from '../services/categorie.service';

@Component({
  selector: 'app-register-medecin',
  templateUrl: './register-medecin.component.html',
  styleUrls: ['./register-medecin.component.css']
})
export class RegisterMedecinComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  rolemed="medecin";
  specialites:any=[];
  medecin={
    nom:'',
    prenom: '',
    email:'',
    password:'',
    sexe:'',
    matricule:'',
    specialite:'',
    prix_consult:'',
    role:''
  }
  constructor(public fb: FormBuilder,public authService: AuthentificationService,public router: Router,public catServ:CategorieService) 
  {
    this.listeSpecialites();
    this.registerForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      sexe: ['', Validators.required],
      matricule: ['', Validators.required],
      specialite: ['', Validators.required],
      prix_consult: ['', Validators.required],
      
    });
 }

  ngOnInit(): void {
  }

  get f()
  {
    return this.registerForm.controls;
  }

onSubmit()
{
  this.submitted= true ;
  if(this.registerForm.invalid)
  {
    return;
  }
  const medecin={
    nom:this.medecin.nom,
    prenom: this.medecin.prenom,
    email:this.medecin.email,
    password:this.medecin.password,
    sexe:this.medecin.sexe,
    matricule:this.medecin.matricule,
    specialite:this.medecin.specialite,
    prix_consult:this.medecin.prix_consult,
    role:this.rolemed
  }
  this.authService.signUpMedecin(medecin).pipe(first())
    
    .subscribe(
        data => {
            this.router.navigate(['login']);   
        },
        error => {

          console.log(error)
         //   this.error = error;
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Il semble que vous ayez saisi une adresse e-mail ou un mot de passe mal orthographiée!',
           })
        this.submitted=false;
        this.registerForm.reset();
        this.loading = false;
        });
        
}

listeSpecialites(){
  this.catServ.getCategories().subscribe((data)=>{this.specialites=data;
  })
}

}
