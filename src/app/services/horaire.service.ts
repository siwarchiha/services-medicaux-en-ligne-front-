import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoraireService {

  constructor(private http:HttpClient) { }

   //ADD CATEGORIE
   add(data: any,id:any):Observable<any>{
    return this.http.post('http://localhost:8020/horaire/add/'+id,data);
 }
  //HORAIRES MEDECIN
  getHorairesMedecin(id: any){
    return this.http.get('http://localhost:8020/horaire/show_horaires/'+id);
  }


  private _listeners = new Subject<any>();
listen():Observable<any>{
  return this._listeners.asObservable();
}
filter(filterBy:string){
  this._listeners.next(filterBy);
}
}
