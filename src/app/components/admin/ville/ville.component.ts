import { Component, OnInit } from '@angular/core';
import { VilleService } from '../../../services/ville.service';
import { Ville } from '../../../models/ville.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaysService } from '../../../services/pays.service';
import { Pays } from '../../../models/pays.model';

@Component({
  selector: 'app-ville',
  standalone: false,
  
  templateUrl: './ville.component.html',
  styleUrl: './ville.component.css'
})

export class VilleComponent implements OnInit{
constructor(private villeService: VilleService, private fb:FormBuilder, private paysService:PaysService) {}

  villes: Ville[] = [];
  newVille?: Ville; // Replace with your Ville model structure
  paysList: Pays[] = []; // List of countries
  villeForm!: FormGroup;
  ville?: Ville;

    ngOnInit(): void {
      this.getAllVille();
      this.initForm();
      this.fetchPays(); 
    }
  
    initForm(): void {
      this.villeForm = this.fb.group({
        nom: ['', [Validators.required]],
        pays: [null, [Validators.required]],
      });
    }

    getAllVille(): void {
      this.villeService.getAllVilles().subscribe({
        next: (data) => {
          this.villes = data;
        },
        error: (err) => {
          console.error('Erreur lors du chargement des pays:', err);
        }
      });
    }

    fetchPays(): void {
        this.paysService.getAllPays().subscribe((data: Pays[]) => {
          this.paysList = data;
        });
    
     }
    
     saveVille():void {
      if(this.villeForm.valid){
        const { nom, pays} = this.villeForm.value;
      }
      this.villeService.saveVille(this.ville!).subscribe({
        next: (data: any) => {
          this.villeForm.reset();
        },
        error: (err) => {
          console.log('Error', err.error.message);
        },
      });
     }


    editVille(ville: Ville) {
      
    }
    
    deleteVille(ville: Ville) {
      
    }

}
