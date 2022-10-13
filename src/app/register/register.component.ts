import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  patient={
    nom:'',
    prenom: '',
    email:'',
    password:'',
    sexe:'',
    date_naiss:'',
    tel:'',
    role:''
  }
  role="patient";
  constructor(public fb: FormBuilder,
    public authService: AuthentificationService,
    public router: Router
   ) { this.registerForm = this.fb.group({
    nom: ['', Validators.required],
    prenom: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    sexe: ['', Validators.required],
    date_naiss: ['', Validators.required],
    tel: ['', Validators.required],
    
  }); }

  ngOnInit(): void {
  }
  get f()
{
  return this.registerForm.controls;
}

onSubmit()
{this.submitted= true ;
  if(this.registerForm.invalid)
  {return;
  }
  const patient={
    nom:this.patient.nom,
    prenom: this.patient.prenom,
    email:this.patient.email,
    password:this.patient.password,
    sexe:this.patient.sexe,
    date_naiss:this.patient.date_naiss,
    tel:this.patient.tel,
    role:this.role
  }
    this.authService.signUpPatient(patient).pipe(first())
    
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

}
