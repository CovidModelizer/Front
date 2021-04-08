import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelisationsService {

  private URL_REST_API = 'http://152.228.165.238:8080/modelisation';
  public days: Array<any>;

  constructor(private http: HttpClient) {
    this.days = new Array<any>();
  }

  // ******************* Appels REST ************************
  getDonneesModeliseesByModel(categorie: string, model: string): Observable<any> {
    return this.http.get(this.URL_REST_API + '/'+categorie+'?model='+model);
  }

  // ********************** Autres **************************
  getPlageGraphe(): any[] | undefined {
    return this.days;
  }

  resetPlageGraphe(): void {
    this.days = [];
  }

  // Récupération des données modélisées cumulées à afficher
  getDonneesModeliseesCumuleesByCategorieEtModel(categorie: string, model: string): any[] {
    // Reset les données en abscisse (contient les valeurs de la dernière fois)
    this.resetPlageGraphe();
    let donneesModeliseesCumulees = new Array<number>();
    if(categorie === 'vaccin' || categorie === 'cas') {
      this.getDonneesModeliseesByModel(categorie, model).subscribe(data => {
        for(let elt of data) {
          donneesModeliseesCumulees.push(Number(elt.value));
          // Récupération de la plage de temps sur laquelle tracer le graphe
          this.days.push(elt.date);
        }
      });
    } else {
      // ERROR
      console.log('ERROR : categorie doit être égale à \'vaccin\' ou \'cas\' !');
    }
    return donneesModeliseesCumulees;
  }

}
