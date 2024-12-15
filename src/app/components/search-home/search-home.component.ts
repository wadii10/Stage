import { Component, OnInit } from '@angular/core';
import { Pays } from '../../models/pays.model';
import { PaysService } from '../../services/pays.service';
import { Ville } from '../../models/ville.model';
import { VilleService } from '../../services/ville.service';
import { HotelService } from '../../services/hotel.service';
import { Hotel } from '../../models/hotel.model';


@Component({
  selector: 'app-search-home',
  standalone: false,
  
  templateUrl: './search-home.component.html',
  styleUrl: './search-home.component.css'
})
export class SearchHomeComponent implements OnInit{
  constructor(private hotelService: HotelService,private paysService: PaysService, private villeService: VilleService) {}
  
 
  allVillesList: Ville[] = [];
  hotelsListe: Hotel[] = [];
  selectedHotelId: string = '';
 
  selectedCity: string = '';
  paysList: Pays[] = [];      // Liste des pays
  villesList: Ville[] = [];   // Liste des villes pour le pays sélectionné
  selectedPays: string = '';  // ID du pays sélectionné
  selectedVille: string = '';
  ngOnInit(): void {
    
    this.loadHotels();
    // this.loadPays();
    // this.loadAllVilles();
    this.fetchPays();
  }
  loadHotels(): void {
    this.hotelService.getAllHotels().subscribe(
      (data) => {
        this.hotelsListe = data;
  
        // console.log(data , "data")
        // Option : sélectionner automatiquement le premier hôtel
        if (this.hotelsListe.length > 0 && this.hotelsListe[0].id) {
          this.selectedHotelId = this.hotelsListe[0].id;
        }
  
        // console.log("Liste des hôtels chargée :", this.hotelsListe);
      },
      (error) => {
        console.error('Erreur lors du chargement des hôtels:', error);
      }
    );
  }
  onHotelSelect(): void {
    // console.log("Hôtel sélectionné :", this.selectedHotelId);
  }


  fetchPays(): void {
    this.paysService.getAllPays().subscribe((data: Pays[]) => {
      this.paysList = data;
      console.log("liste pays",this.paysList)
    });

  }

  onPaysChange(): void {
    console.log("pays selected",this.selectedPays)
  }
  // loadPays() {
  //   console.log('Chargement des pays');
  //   this.paysService.getAllPays().subscribe(
  //     (data) => {
  //       this.paysList = data;
  //       // this.allVillesList = data;
  //       console.log('Pays chargés:', this.paysList);
  //     },
  //     (error) => {
  //       console.error('Erreur lors de la récupération des pays', error);
  //     }
  //   );
  // }

  // loadAllVilles() {
  //   console.log('Chargement de toutes les villes');
  //   this.villeService.getAllVilles().subscribe(
  //     (data) => {
  //       this.allVillesList = data;
  //       this.updateVillesList(); // Mettre à jour les villes au début
  //     },
  //     (error) => {
  //       console.error('Erreur lors de la récupération des villes', error);
  //     }
  //   );
  // }

  // updateVillesList() {
  //   console.log('Méthode updateVillesList appelée. Pays sélectionné:', this.selectedPays);
  //   setTimeout(() => {
  //     console.log('Pays sélectionné dans updateVillesList:', this.selectedPays);
  //   }, 0);
  //   if (this.selectedPays) {
  //     // Charger les villes du pays sélectionné
  //     this.villeService.getVillesByPays(this.selectedPays).subscribe(
  //       (data) => {
  //         console.log('Villes filtrées pour le pays:', data);
  //         console.log('Pays sélectionné:', this.selectedPays);
  //         this.villesList = data;
  //       },
  //       (error) => {
  //         console.error('Erreur lors de la récupération des villes pour le pays sélectionné', error);
  //       }
  //     );
  //   } else {
  //     // Si aucun pays n'est sélectionné, afficher toutes les villes
  //     this.villesList = this.allVillesList;
  //   }
  // }

  // onPaysChange() {
  //   console.log('Méthode onPaysChange appelée. Pays sélectionné:', this.selectedPays);
  //   this.updateVillesList();
  // }
 
}
