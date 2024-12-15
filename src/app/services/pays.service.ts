import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Pays } from "../models/pays.model";
import { Observable } from "rxjs";
import { Ville } from "../models/ville.model";

@Injectable({
    providedIn: 'root'
  })
  export class PaysService {
    private apiUrl = 'http://localhost:8080/api/pays'; 
    private baseUrl = 'http://localhost:8080/api/villes';
    
    constructor(private http: HttpClient) {}
  
    getAllPays(): Observable<Pays[]> {
      return this.http.get<Pays[]>(this.apiUrl);
    }
  
    addPays(pays: Pays): Observable<Pays> {
      return this.http.post<Pays>(this.apiUrl, pays);
    }
  
    getPaysById(id: string): Observable<Pays> {
      return this.http.get<Pays>(`${this.apiUrl}/${id}`);
    }
  
    deletePays(id: string): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
      getVillesByPays(paysId: string): Observable<Ville[]> {
            console.log('Requête API pour le pays ID:', paysId);
            return this.http.get<Ville[]>(`${this.baseUrl}/pays?paysId=${paysId}`);
        }
  }