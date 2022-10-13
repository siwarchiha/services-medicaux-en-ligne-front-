import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';
import { PlanningService } from '../services/planning.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor( public authService: AuthentificationService,private actRoute: ActivatedRoute,public userServ:UserService,public planServ:PlanningService) {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.userServ.getProfilPatient(id);
    this.planServ.getPlanningMedecin(id);
   }

  ngOnInit(): void {
  }

  logout(){
    this.authService.doLogout();
  }
  isAdmin():boolean
  {
    if(this.authService.RoleUser=="admin")
    return true;
    else 
    return false;

  }
  isPatient():boolean
  {
    if(this.authService.RoleUser=="patient")
    return true;
    else 
    return false;
  }
  isMedecin():boolean
  {
    if(this.authService.RoleUser=="medecin")
    return true;
    else 
    return false;

  }
}
