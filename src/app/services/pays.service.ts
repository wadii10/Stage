import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Pays } from "../models/pays.model";
import { Observable } from "rxjs";
import { Ville } from "../models/ville.model";
import { environment } from "../../environment/environment";

@Injectable({
    providedIn: 'root'
  })
  export class PaysService {
    
    constructor(private http: HttpClient) {}
  
    getAllPays(): Observable<Pays[]> {
      return this.http.get<Pays[]>(environment.baseApi+"/pays");
    }
  
    addPays(pays: Pays): Observable<Pays> {
      return this.http.post<Pays>(environment.baseApi+"/pays", pays);
    }
  
    getPaysById(id: string): Observable<Pays> {
      return this.http.get<Pays>(`${environment.baseApi}/${id}`);
    }
  
    deletePays(id: string): Observable<void> {
      return this.http.delete<void>(`${environment.baseApi}/${id}`);
    }
      getVillesByPays(paysId: string): Observable<Ville[]> {
            console.log('Requête API pour le pays ID:', paysId);
            return this.http.get<Ville[]>(`${environment.baseApi}/villes/pays?paysId=${paysId}`);
        }
  }