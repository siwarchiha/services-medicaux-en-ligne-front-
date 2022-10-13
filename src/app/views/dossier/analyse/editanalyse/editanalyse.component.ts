import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { DossiermedicaleService } from 'src/app/services/dossiermedicale.service';

@Component({
  selector: 'app-editanalyse',
  templateUrl: './editanalyse.component.html',
  styleUrls: ['./editanalyse.component.css']
})
export class EditanalyseComponent implements OnInit {
  AnalyseForm : FormGroup;
  submitted = false;
  antecedent :any=[];
  constructor(public formBuilder: FormBuilder, private router:Router,public dossServ:DossiermedicaleService, private actRoute : ActivatedRoute,public authServ:AuthentificationService) { 
      this.editAnalyse();
      let  id = this.actRoute.snapshot.paramMap.get('id');
      this.getAnalyse(id);
      this.AnalyseForm= this.formBuilder.group(
        { 
          nom: ['', Validators.required],
          date: ['', Validators.required],
          resultat:['',Validators.required],
          id:['',Validators.required]
          
          
         
      },)
    }
    ngOnInit() {}
  get f()
    {
      return this.AnalyseForm.controls;
    }
    getAnalyse(id:any){
      this.dossServ.getAnalyseById(id).subscribe(data=> {
        this.AnalyseForm.patchValue({
          nom: data['nom'],
          date: data['date'],
          resultat: data['resultat'],
          id:data['id']
      } 
        )
      })
    }
    editAnalyse( ){
      this.AnalyseForm=this.formBuilder.group(
        {  
          nom: ['', Validators.required],
          date: ['', Validators.required],
          resultat:['',Validators.required],
          id:['',Validators.required]
      }
        
      )
    }
    onSubmit() {
      {
         this.submitted = true;
      
       {if(window.confirm('Voulez-vous enregistrer les modifications ?')){
 
         let id=this.actRoute.snapshot.paramMap.get('id');
        
         this.dossServ.UpdateAnalyse(id,this.AnalyseForm.value).subscribe(res=>{
           //this.router.navigateByUrl('/acceuil/dossier/list_antecedents/:id');
           console.log('content updated successfully!')
           
           })
         }
          }
          if (this.AnalyseForm.invalid) {
            console.log('Invalid') ;
              return;
          }
        }
       }
   onReset()
   {this.submitted=false;
    this.AnalyseForm.reset();
  
   }
  }