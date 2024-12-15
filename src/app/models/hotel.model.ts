import { Pays } from "./pays.model";
import { Ville } from "./ville.model";

export interface Hotel {
    id?: string;
    nom: string;
    adresse: string;
    numTel: string;
    email: string;
    nbChambreIndividuelle: number;
    nbChambreDouble: number;
    nbChambreTriple: number;
    nbSuite: number;
    ville: Ville;
    pays: Pays;
}