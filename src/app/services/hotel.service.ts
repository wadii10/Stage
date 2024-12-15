import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Hotel } from "../models/hotel.model";
import { environment } from "../../environment/environment";

@Injectable({
    providedIn: 'root',
  })
export class HotelService {

  
    constructor(private http: HttpClient) {}
  
    // Récupérer tous les hôtels
    getAllHotels(): Observable<Hotel[]> {
      return this.http.get<Hotel[]>(environment.baseApi);
    }
  
    // Récupérer un hôtel par ID
    getHotelById(id: string): Observable<Hotel> {
      return this.http.get<Hotel>(`${environment.baseApi}/${id}`);
    }
  
    // Récupérer les hôtels par pays
    getHotelsByPays(paysId: string): Observable<Hotel[]> {
      return this.http.get<Hotel[]>(`${environment.baseApi}/pays?paysId=${paysId}`);
    }
  
    // Récupérer les hôtels par ville
    getHotelsByVille(villeId: string): Observable<Hotel[]> {
      return this.http.get<Hotel[]>(`${environment.baseApi}/ville?villeId=${villeId}`);
    }
  
    // Créer un hôtel
    createHotel(hotel: Hotel): Observable<Hotel> {
      return this.http.post<Hotel>(environment.baseApi, hotel);
    }
  
    // Supprimer un hôtel
    deleteHotel(id: string): Observable<void> {
      return this.http.delete<void>(`${environment.baseApi}/${id}`);
    }
  }