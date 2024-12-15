import { Observable } from "rxjs";
import { Ville } from "../models/ville.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Pays } from "../models/pays.model";

@Injectable({
    providedIn: 'root',
})
export class VilleService {
    private baseUrl = 'http://localhost:8080/api/villes';

    constructor(private http: HttpClient) { }
    
  
    getAllVilles(): Observable<Ville[]> {
        return this.http.get<Ville[]>(this.baseUrl);
    }

}

