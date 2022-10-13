import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { DossiermedicaleService } from 'src/app/services/dossiermedicale.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listeanalyses',
  templateUrl: './listeanalyses.component.html',
  styleUrls: ['./listeanalyses.component.css']
})
export class ListeanalysesComponent implements OnInit {

  AnalyseForm : FormGroup ;
  submitted = false;
  id_doss:any;
  analyses:any=[];
  analyse={
    nom:'',
    date:'',
    resultat:''
  };
  constructor(public dossServ:DossiermedicaleService, private actRoute : ActivatedRoute,private formBuilder: FormBuilder,public authServ:AuthentificationService) {
    let  id = this.actRoute.snapshot.paramMap.get('id');
    this.readAnalyseById(id);
    this.dossServ.listen().subscribe((m:any)=>{
      console.log(m)
      this.readAnalyseById(id);
      ;})

    this.AnalyseForm= this.formBuilder.group(
      { 
        nom: ['', Validators.required],
        date: ['', Validators.required],
        resultat:['',Validators.required],
        dossier_id:['']
      } );
   }

  ngOnInit(): void {
    this.dossServ.getIdDossier(this.authServ.idUser).subscribe((data)=>{this.id_doss=data;
    console.log(this.id_doss)})
  }
  
  readAnalyseById(id:any){
    this.dossServ.getAnalysesDossier(id).subscribe((data)=>{this.analyses=data;
      console.log(this.analyses)
    })
  }

  onSubmit(id:any)
  {
    const analyse={
      date:this.analyse.date,
      nom:this.analyse.nom,
      resultat:this.analyse.resultat,
      dossier_id:this.id_doss
    };
    console.log(analyse)
    console.log(this.id_doss)
      this.dossServ.addAnalyse(analyse,id).subscribe(
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
           title: 'analyse ajouté avec succès'
         })

         console.log('analyse successfully created')
         this.dossServ.filter('register click');
         this.submitted=false;
         this.AnalyseForm.reset();
       },(error)=>{
         console.log(error);
       }
     );
  
  }
  supprimer(id : any)
  {
console.log(id)
    this.dossServ.deleteAnalyse(id).subscribe((data)=>{
      console.log(data);
    })
  }
  onReset()
  {
    this.submitted=false;
    this.AnalyseForm.reset();

  }


}


