import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DossiermedicaleService {

  constructor(private http:HttpClient) { }

   //ID DOSSIER PATIENT
   getIdDossier(id: any){
    return this.http.get('http://localhost:8020/patient/get/'+id);
  }
/*   ------------------------------------ SECTION ANALYSES --------------------------------- */
   //ADD ANALySE
   addAnalyse(data: any,id:any):Observable<any>{
    return this.http.post('http://localhost:8020/analyse/add/'+id,data);
 }
  //ANALYSES DOSSIER
  getAnalysesDossier(id: any){
    return this.http.get('http://localhost:8020/analyse/show_analyses/'+id);
  }
  getAnalyseById(id: any){
    return this.http.get('http://localhost:8020/analyse/show/'+id);
  }
 //ANALYSES DELETE
 deleteAnalyse(id: any){
  return this.http.delete('http://localhost:8020/analyse/delete/'+id);
}
UpdateAnalyse(id: any,data: any):Observable<any>{
  return this.http.put('http://localhost:8020/analyse/edit',data);
}
/*   ------------------------------------ SECTION ANTECEDENTS --------------------------------- */
   //ADD ANTECEDENT
   addAntecedent(data: any,id:any):Observable<any>{
    return this.http.post('http://localhost:8020/antecedent/add/'+id,data);
 }
  //ANTECEDENT DOSSIER
  getAntecedentsDossier(id: any){
    return this.http.get('http://localhost:8020/antecedent/show_antecedents/'+id);
  }
  getAntecedentById(id: any){
    return this.http.get('http://localhost:8020/antecedent/show/'+id);
  }
  deleteAntecedent(id: any){
    return this.http.delete('http://localhost:8020/antecedent/delete/'+id);
  }
  UpdateAntecedent(data: any):Observable<any>{
    return this.http.put('http://localhost:8020/antecedent/edit',data);
  }
  /*

/*   ------------------------------------ SECTION CONSULTATIONS --------------------------------- */
 //ADD ANALySE
 addConsultation(data: any,id:any):Observable<any>{
  return this.http.post('http://localhost:8020/consultation/add/'+id,data);
}
//ANALYSES DOSSIER
getConsultationsDossier(id: any){
  return this.http.get('http://localhost:8020/consultation/show_consultations/'+id);
}
getConsultationById(id: any){
  return this.http.get('http://localhost:8020/consultation/show/'+id);
}
//ANALYSES DELETE
deleteConsultation(id: any){
return this.http.delete('http://localhost:8020/consultation/delete/'+id);
}
UpdateConsultation(id: any,data: any):Observable<any>{
return this.http.put('http://localhost:8020/consultation/edit',data);
}

  private _listeners = new Subject<any>();
listen():Observable<any>{
  return this._listeners.asObservable();
}
filter(filterBy:string){
  this._listeners.next(filterBy);
}
}
