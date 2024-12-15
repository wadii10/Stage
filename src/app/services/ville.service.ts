import { Observable } from "rxjs";
import { Ville } from "../models/ville.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Pays } from "../models/pays.model";
import { environment } from "../../environment/environment";

@Injectable({
    providedIn: 'root',
})
export class VilleService {


    constructor(private http: HttpClient) { }
    
  
    getAllVilles(): Observable<Ville[]> {
        return this.http.get<Ville[]>(environment.baseApi+"/villes");
    }

    saveVille(ville: Ville): Observable<void> {
        return this.http.post<void>(
          environment.baseApi + '/ville',
          ville
        );
    }

}

