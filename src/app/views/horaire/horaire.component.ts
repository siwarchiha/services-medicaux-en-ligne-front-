import { Component, Input, OnInit } from '@angular/core';
import { HoraireService } from 'src/app/services/horaire.service';

@Component({
  selector: 'app-horaire',
  templateUrl: './horaire.component.html',
  styleUrls: ['./horaire.component.css']
})
export class HoraireComponent implements OnInit {

  @Input() id:any;
  hor:any=[]
 
  constructor(public horServ:HoraireService) {
   
   }

  ngOnInit(): void {
    this.getHoraires();
    console.log(this.id);
    console.log("fadiiit")
  } 
getHoraires(){
  this.horServ.getHorairesMedecin(this.id).subscribe((data)=>{
        
    this.hor=data
    console.log(data)  })
  }
}
