import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { HoraireService } from 'src/app/services/horaire.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  HoraireForm : FormGroup ;
  submitted = false;
  id_med:any;
  Horaires:any=[];
  horaire={
    date:'',
    deb:'',
    medecin_id:''
  };
  constructor(public horServ:HoraireService, private actRoute : ActivatedRoute,private formBuilder: FormBuilder,public authServ:AuthentificationService) {
    let  id = this.actRoute.snapshot.paramMap.get('id');
    this.readHoraireById(id);
    this.horServ.listen().subscribe((m:any)=>{
      console.log(m)
      this.readHoraireById(id);
      ;})

    this.id_med=this.authServ.idUser;
    console.log(this.id_med)
    this.HoraireForm= this.formBuilder.group(
      { 
        date: ['', Validators.required],
        deb: ['', Validators.required],
        medecin_id:['',Validators.required]
      } );
   }

  ngOnInit(): void {
  }

  readHoraireById(id:any){
    this.horServ.getHorairesMedecin(id).subscribe((data)=>{this.Horaires=data;
      console.log(this.Horaires)
    })
  }

  onSubmit(id:any)
  {
    const horaire={
      date:this.horaire.date,
      deb:this.horaire.deb,
      medecin_id:this.id_med
    };
    console.log(horaire)
    console.log(this.id_med)
      this.horServ.add(horaire,id).subscribe(
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
           title: 'Horaire ajouté avec succès'
         })

         console.log('Horaire successfully created')
         this.horServ.filter('register click');
         this.submitted=false;
         this.HoraireForm.reset();
       },(error)=>{
         console.log(error);
       }
     );
  
  }
  onReset()
  {
    this.submitted=false;
    this.HoraireForm.reset();

  }
}
