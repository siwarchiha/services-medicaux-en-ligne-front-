import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { DossiermedicaleService } from 'src/app/services/dossiermedicale.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listeconsultations',
  templateUrl: './listeconsultations.component.html',
  styleUrls: ['./listeconsultations.component.css']
})
export class ListeconsultationsComponent implements OnInit {
  ConsultationForm : FormGroup ;
  submitted = false;
  id_doss:any;
  consultations:any=[];
  consultation={
    id:'',
    commentaire:'',
    motif:'',
    date:'',
    dossier_id:''
   
   
  };
  constructor(public dossServ:DossiermedicaleService, private actRoute : ActivatedRoute,private formBuilder: FormBuilder,public authServ:AuthentificationService) {
    let  id = this.actRoute.snapshot.paramMap.get('id');
    this.readConsultationById(id);
    this.dossServ.listen().subscribe((m:any)=>{
      console.log(m)
      this.readConsultationById(id);
      ;})

    this.ConsultationForm= this.formBuilder.group(
      { id:['',Validators.required],
        commentaire: ['', Validators.required],
        date: ['', Validators.required],
        motif: ['', Validators.required],
        dossier_id:['']
      } );
   }

  ngOnInit(): void {
    this.dossServ.getIdDossier(this.authServ.idUser).subscribe((data)=>{this.id_doss=data;
    console.log(this.id_doss)})
  }
  
  readConsultationById(id:any){
    this.dossServ.getAntecedentsDossier(id).subscribe((data)=>{this.consultations=data;
      console.log(this.consultations)
    })
  }
 

  onSubmit(id:any)
  {
    const consultation={
      id:this.consultation.id,
        commentaire: this.consultation.commentaire,
        date: this.consultation.date,
        motif: this.consultation.motif,
        dossier_id:['']
      
    };
    console.log(consultation)
    console.log(this.id_doss)
      this.dossServ.addConsultation(consultation,id).subscribe(
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
         this.ConsultationForm.reset();
       },(error)=>{
         console.log(error);
       }
     );
  
  }
  supprimer(id : any)
  {
console.log(id)
    this.dossServ.deleteConsultation(id).subscribe((data)=>{
      console.log(data);
    })
  }
  onReset()
  {
    this.submitted=false;
    this.ConsultationForm.reset();

  }


}


