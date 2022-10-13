import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  //PROFIL PATIENT
  getProfilPatient(id: any){
    return this.http.get('http://localhost:8020/patient/show/'+id);
  }

  //PROFIL MEDECIN
  getProfilMedecin(id: any){
    return this.http.get('http://localhost:8020/medecin/show/'+id);
  }
}
