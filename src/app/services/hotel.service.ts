import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Hotel } from "../models/hotel.model";

@Injectable({
    providedIn: 'root',
  })
export class HotelService {
    private baseUrl = 'http://localhost:8080/api/hotels';
  
    constructor(private http: HttpClient) {}
  
    // Récupérer tous les hôtels
    getAllHotels(): Observable<Hotel[]> {
      return this.http.get<Hotel[]>(this.baseUrl);
    }
  
    // Récupérer un hôtel par ID
    getHotelById(id: string): Observable<Hotel> {
      return this.http.get<Hotel>(`${this.baseUrl}/${id}`);
    }
  
    // Récupérer les hôtels par pays
    getHotelsByPays(paysId: string): Observable<Hotel[]> {
      return this.http.get<Hotel[]>(`${this.baseUrl}/pays?paysId=${paysId}`);
    }
  
    // Récupérer les hôtels par ville
    getHotelsByVille(villeId: string): Observable<Hotel[]> {
      return this.http.get<Hotel[]>(`${this.baseUrl}/ville?villeId=${villeId}`);
    }
  
    // Créer un hôtel
    createHotel(hotel: Hotel): Observable<Hotel> {
      return this.http.post<Hotel>(this.baseUrl, hotel);
    }
  
    // Supprimer un hôtel
    deleteHotel(id: string): Observable<void> {
      return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }
  }