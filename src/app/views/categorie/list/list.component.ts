import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { CategorieService } from 'src/app/services/categorie.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  CategorieForm : FormGroup ;
  submitted = false;
  Categories:any=[];
  constructor(private catServ:CategorieService,private authService:AuthentificationService,private formBuilder: FormBuilder ) {
    this.readCategories();
    this.CategorieForm= this.formBuilder.group(
      { 
        nom: ['', Validators.required],
    });
    this.catServ.listen().subscribe((m:any)=>{
      console.log(m);
      this.readCategories();
     
    })
   }

  ngOnInit(): void {
  }
  readCategories()
  {
    this.catServ.getCategories().subscribe((data)=>{this.Categories=data;})
  }

  isAdmin():boolean
   {
     if(this.authService.RoleUser=="admin")
     return true;
     else 
     return false;
 
   }
   onSubmit(){
    this.submitted= true ;
     if(this.CategorieForm.invalid)
     {return;}
     else{
   this.catServ.add(this.CategorieForm.value).subscribe(
         (res)=>{
           console.log('Materiel successfully created')
           const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Matériel ajouté avec succès'
          })

           this.catServ.filter('register click');
           this.submitted=false;
           this.CategorieForm.reset();
         },(error)=>{
           console.log(error);
         }
       );
     
    }
   }

}
