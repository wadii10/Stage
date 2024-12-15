import { Component, OnInit } from '@angular/core';
import { Pays } from '../../models/pays.model';
import { PaysService } from '../../services/pays.service';

@Component({
  selector: 'app-pays',
  standalone: false,
  
  templateUrl: './pays.component.html',
  styleUrl: './pays.component.css'
})
export class PaysComponent implements OnInit{
  constructor(private paysService: PaysService) {}
  paysList: Pays[] = [];

  ngOnInit(): void {
    this.getAllPays(); 
  }

  getAllPays(): void {
    this.paysService.getAllPays().subscribe({
      next: (data) => {
        this.paysList = data;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des pays:', err);
      }
    });
  }
}
