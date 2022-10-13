import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { login } from '../model/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  constructor(public fb: FormBuilder,
    public authService: AuthentificationService,
    public router: Router
   ) {this.loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
      
  });
 /* if(this.authService.currentUserValue)
{
  this.router.navigate(['']);
}*/
  }

  ngOnInit(): void {
  }

  get f()
{
  return this.loginForm.controls;
}

onSubmit()
{this.submitted= true ;
  if(this.loginForm.invalid)
  {return;
  }
    this.authService.signIn(this.loginForm.value).pipe(first())
    .subscribe(
        data => {
          data=this.loginForm.value;
          console.log(data)
            this.router.navigate(['acceuil/categorie/list']);
        },
        error => {
console.log(error);
         Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Il semble que vous ayez saisi une adresse e-mail ou un mot de passe mal orthographiée!',
        })
        this.submitted=false;
           this.loginForm.reset();
            this.loading = false;
        });
}
/*onSubmit(){
  this.authService.login(new login()).pipe(first())
    .subscribe(
        data => {
            this.router.navigate(['home']);
        },
        error => {
         //   this.error = error;
         Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Il semble que vous ayez saisi une adresse e-mail ou un mot de passe mal orthographiée!',
        })
        this.submitted=false;
           this.loginForm.reset();
            this.loading = false;
        });
}*/
}
