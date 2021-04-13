import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SituationReelle } from '../shared/model/SituationReelle';

@Injectable({
  providedIn: 'root'
})
export class DonneesReellesService {

  private URL_REST_API = 'http://api.covid-modelizer.fr/data';


  constructor(private http: HttpClient) {
  }

  // ******************* Appels REST ********************
  getAllSituationsReelles(): Observable<any> {
    return this.http.get(this.URL_REST_API + '/full');
  }

  getSituationReelleByDate(date: string): Observable<any> {
    return this.http.get(this.URL_REST_API + '/full/date?date=' + date);
  }

  getAllDonneesReelles(indicateur: string): Observable<any> {
    return this.http.get(this.URL_REST_API + '/unit?name=' + indicateur);
  }

  // ********************** Autres **********************
  getDonneesReellesCumuleesByCategorieEtModelEtDateDebut(categorie: string, model: string, dateDebut: any): any[] {
    console.log(dateDebut);
    // Récupération des données réelles cumulées à afficher
    let donneesReellesCumules = new Array<number>();
    this.getAllSituationsReelles().subscribe(data => {
      if (categorie === 'vaccination') {
        for (let elt of data) {
          // On ne récupère que les valeurs à partir de la date de la 1ère prédiction
          if (elt.date >= dateDebut) {
            donneesReellesCumules.push(Number(this.getDataToReturnSiVaccination(model, elt)));
          }
        }
      } else if (categorie === 'infection') {
        for (let elt of data) {
          if (elt.date >= dateDebut) {
            donneesReellesCumules.push(Number(this.getDataToReturnSiInfection(model, elt)));
          }
        }
      } else {
        // ERROR
        console.log('ERROR : categorie doit être égale à \'infection\' ou \'vaccination\' !');
      }
    });
    return donneesReellesCumules;
  }

  getDataToReturnSiInfection(model: string, situationReelle: SituationReelle): string {
    let elt = '';
    switch (model) {
      case ('LIN'): {
        elt = situationReelle.cumulCasConfirmes;
        break;
      }
      case ('SIR'): {
        elt = situationReelle.sirI;
        break;
      }
      case ('MCL'): {
        elt = situationReelle.nouveauxCasConfirmes;
        break;
      }
      default: {
        // ERROR
        break;
      }
    }
    return elt;
  }

  getDataToReturnSiVaccination(model: string, situationReelle: SituationReelle): string {
    let elt = '';
    switch (model) {
      case ('LIN'): {
        elt = situationReelle.cumulPremieresInjections;
        break;
      }
      case ('SVR'): {
        elt = situationReelle.svirV;
        break;
      }
      case ('MCL'): {
        elt = situationReelle.nouvellesPremieresInjections;
        break;
      }
      default: {
        // ERROR
        break;
      }
    }
    return elt;
  }

}
