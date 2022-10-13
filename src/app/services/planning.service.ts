import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanningService {

  constructor(private http:HttpClient) { }

  //PLANNING MEDECIN
  getPlanningMedecin(id: any){
    return this.http.get('http://localhost:8020/planning/show_planning/'+id);
  }
}
