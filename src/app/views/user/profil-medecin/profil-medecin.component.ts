import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profil-medecin',
  templateUrl: './profil-medecin.component.html',
  styleUrls: ['./profil-medecin.component.css']
})
export class ProfilMedecinComponent implements OnInit {

  Medecin:any;
  constructor(private medServ:UserService,private actRoute : ActivatedRoute) {

    let  id = this.actRoute.snapshot.paramMap.get('id');
    this.profilMedecin(id);
   }

  ngOnInit(): void {
  }

  profilMedecin(id:any)
  {
    this.medServ.getProfilMedecin(id).subscribe((data)=>{this.Medecin=data;
    console.log(data)})
  }

}
