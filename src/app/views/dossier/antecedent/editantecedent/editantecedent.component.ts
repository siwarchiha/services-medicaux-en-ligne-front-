import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute , Route, Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { DossiermedicaleService } from 'src/app/services/dossiermedicale.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-editantecedent',
  templateUrl: './editantecedent.component.html',
  styleUrls: ['./editantecedent.component.css']
})
export class EditantecedentComponent implements OnInit {
  AntecedentForm : FormGroup;
  iddos : any ;
  submitted = false;
  antecedent :any=[];
  ante={
    id:'',
    nom:'',
    categorie:'',
   
   
  };
  constructor(public formBuilder: FormBuilder, private router:Router,public dossServ:DossiermedicaleService, private actRoute : ActivatedRoute,public authServ:AuthentificationService) { 
      this.editAntecedent();
      let  id = this.actRoute.snapshot.paramMap.get('id');
      this.getAntecedent(id);
      this.AntecedentForm= this.formBuilder.group(
        { 
          nom: ['', Validators.required],
          categorie: ['', Validators.required],
          id:['',Validators.required]
         
      },)
    }
    ngOnInit() {}
  get f()
    {
      return this.AntecedentForm.controls;
    }
    getAntecedent(id:any){
      this.dossServ.getAntecedentById(id).subscribe(data=> {
        this.AntecedentForm.patchValue({
          nom: data['nom'],
          categorie: data['categorie'],
         id:data['id']
      } 
        )
      })
    }
    editAntecedent( ){
      this.AntecedentForm=this.formBuilder.group(
        {  
          nom: ['', Validators.required],
          categorie: ['', Validators.required],
          id:['',Validators.required]
      }
        
      )
    }
    onSubmit() {
      {  this.dossServ.getIdDossier(this.authServ.idUser).subscribe(res=>{
        this.iddos=res;
        
        });
         this.submitted = true;
      
       {if(window.confirm('Voulez-vous enregistrer les modifications ?')){
 
         let id=this.actRoute.snapshot.paramMap.get('id');
        console.log(this.AntecedentForm.value);


         this.dossServ.UpdateAntecedent(this.AntecedentForm.value).subscribe(res=>{
           this.router.navigateByUrl('/acceuil/dossier/list_antecedents/'+this.iddos.get(id));
           console.log('content updated successfully!')
           
           })
         }
          }
          if (this.AntecedentForm.invalid) {
            console.log('Invalid') ;
              return;
          }
        }
       }
   onReset()
   {this.submitted=false;
    this.AntecedentForm.reset();
  
   }
  }