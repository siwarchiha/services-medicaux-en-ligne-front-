import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { DossiermedicaleService } from 'src/app/services/dossiermedicale.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  id_doss:any;
  constructor(public dossServ:DossiermedicaleService, private actRoute : ActivatedRoute,public authServ:AuthentificationService) { }

  ngOnInit(): void {
    this.dossServ.getIdDossier(this.authServ.idUser).subscribe((data)=>{this.id_doss=data;
      console.log(this.id_doss)})
  }

}
