import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { DossiermedicaleService } from 'src/app/services/dossiermedicale.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listeantecedents',
  templateUrl: './listeantecedents.component.html',
  styleUrls: ['./listeantecedents.component.css']
})
export class ListeantecedentsComponent implements OnInit {
  AntecedentForm : FormGroup ;
  submitted = false;
  id_doss:any;
  antecedents:any=[];
  antecedent={
    nom:'',
    categorie:'',
   
   
  };
  constructor(public dossServ:DossiermedicaleService, private actRoute : ActivatedRoute,private formBuilder: FormBuilder,public authServ:AuthentificationService) {
    let  id = this.actRoute.snapshot.paramMap.get('id');
    this.readAntecedentById(id);
    this.dossServ.listen().subscribe((m:any)=>{
      console.log(m)
      this.readAntecedentById(id);
      ;})

    this.AntecedentForm= this.formBuilder.group(
      { 
        nom: ['', Validators.required],
        categorie: ['', Validators.required],
        dossier_id:['']
      } );
   }

  ngOnInit(): void {
    this.dossServ.getIdDossier(this.authServ.idUser).subscribe((data)=>{this.id_doss=data;
    console.log(this.id_doss)})
  }
  
  readAntecedentById(id:any){
    this.dossServ.getAntecedentsDossier(id).subscribe((data)=>{this.antecedents=data;
      console.log(this.antecedents)
    })
  }
 

  onSubmit(id:any)
  {
    const antecedent={
      nom:this.antecedent.nom,
      categorie:this.antecedent.categorie,
     
      dossier_id:this.id_doss
    };
    console.log(antecedent)
    console.log(this.id_doss)
      this.dossServ.addAntecedent(antecedent,id).subscribe(
       (res)=>{ 
         
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
           title: 'antecedent ajouté avec succès'
         })

         console.log('antecedent successfully created')
         this.dossServ.filter('register click');
         this.submitted=false;
         this.AntecedentForm.reset();
       },(error)=>{
         console.log(error);
       }
     );
  
  }
  supprimer(id : any)
  {
console.log(id)
    this.dossServ.deleteAntecedent(id).subscribe((data)=>{
      console.log(data);
    })
  }
  onReset()
  {
    this.submitted=false;
    this.AntecedentForm.reset();

  }


}


