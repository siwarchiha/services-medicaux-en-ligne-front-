import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategorieService } from 'src/app/services/categorie.service';
import { HoraireService } from 'src/app/services/horaire.service';

@Component({
  selector: 'app-list-medecins',
  templateUrl: './list-medecins.component.html',
  styleUrls: ['./list-medecins.component.css']
})
export class ListMedecinsComponent implements OnInit {

  Medecins:any=[];
  Horaires:any=[];
  hor:any=[]

  constructor(public horServ:HoraireService,private catServ:CategorieService, private actRoute : ActivatedRoute ) {
    let  id = this.actRoute.snapshot.paramMap.get('id');
    this.readMedecinsByCategorie(id);
    
   }

  ngOnInit(): void {
  }
  
  readMedecinsByCategorie(id:any)
  {
    this.catServ.getMedecinsByCategorie(id).subscribe((data)=>{this.Medecins=data;
      console.log(this.Medecins)

    for (let i = 0; i < this.Medecins.length; i++){
   
      console.log(this.Medecins[i].id)
      this.horServ.getHorairesMedecin(this.Medecins[i].id).subscribe((data)=>{
        
        this.hor[i]=data
        console.log(this.hor[i])  })
     // }
    }
  })
     
  }
  readHoraireById(id:any){
    this.horServ.getHorairesMedecin(id).subscribe((data)=>{this.Horaires=data;
      console.log(this.Horaires)
    })
  }
}
