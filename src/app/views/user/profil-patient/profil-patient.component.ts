import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profil-patient',
  templateUrl: './profil-patient.component.html',
  styleUrls: ['./profil-patient.component.css']
})
export class ProfilPatientComponent implements OnInit {

  Patient:any;
  constructor(private patServ:UserService,private actRoute : ActivatedRoute) {

    let  id = this.actRoute.snapshot.paramMap.get('id');
    this.profilPatient(id);
   }

  ngOnInit(): void {
  }

  profilPatient(id:any)
  {
    this.patServ.getProfilPatient(id).subscribe((data)=>{this.Patient=data;
    console.log(data)})
  }


}
