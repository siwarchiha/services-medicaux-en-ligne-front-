import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http:HttpClient) { }

    //LISTE CATEGORIES
    getCategories(){
      return this.http.get('http://localhost:8020/categorie/list');
    }
     //LISTE MEDECINS PAR CATEGORIE
     getMedecinsByCategorie(id: any){
      return this.http.get('http://localhost:8020/categorie/list_medecins/'+id);
    }

    //ADD CATEGORIE
    add(data: any):Observable<any>{
     return this.http.post('http://localhost:8020/categorie/add',data);
  }

  private _listeners = new Subject<any>();
listen():Observable<any>{
  return this._listeners.asObservable();
}
filter(filterBy:string){
  this._listeners.next(filterBy);
}
}
