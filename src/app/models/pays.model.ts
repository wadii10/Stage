import { Ville } from "./ville.model";

export interface Pays {
    id?: string; 
    nom?: string;
    imageUrl?: string;
    villes?:Ville[];
}