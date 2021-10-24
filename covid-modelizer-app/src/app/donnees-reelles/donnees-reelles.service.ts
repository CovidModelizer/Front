import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SituationReelle} from '../shared/model/SituationReelle';

@Injectable({
  providedIn: 'root'
})
export class DonneesReellesService {

  private URL_REST_API = 'https://api.covid-modelizer.fr/data';

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
  getDonneesReellesCumuleesByCategoryAndModelAndStartDate(category: string, model: string, startDate: any): any[] {
    console.log(startDate);
    // Récupération des données réelles cumulées à afficher
    const donneesReellesCumules = new Array<number>();
    this.getAllSituationsReelles().subscribe(data => {
      if (category === 'vaccination') {
        for (const elt of data) {
          // On ne récupère que les valeurs à partir de la date de la 1ère prédiction
          if (elt.date >= startDate) {
            donneesReellesCumules.push(Number(this.getDataToReturnSiVaccination(model, elt)));
          }
        }
      } else if (category === 'infection') {
        for (const elt of data) {
          if (elt.date >= startDate) {
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
      case ('UNI'): {
        elt = situationReelle.cumulCasConfirmes;
        break;
      }
      case ('SIR'): {
        elt = situationReelle.sirI;
        break;
      }
      case ('MUL'): {
        elt = situationReelle.nouveauxCasConfirmes;
        break;
      }
      default: {
        break;
      }
    }
    return elt;
  }

  getDataToReturnSiVaccination(model: string, situationReelle: SituationReelle): string {
    let elt = '';
    switch (model) {
      case ('UNI'): {
        elt = situationReelle.cumulPremieresInjections;
        break;
      }
      case ('SVI'): {
        elt = situationReelle.svirV;
        break;
      }
      case ('MUL'): {
        elt = situationReelle.nouvellesPremieresInjections;
        break;
      }
      default: {
        break;
      }
    }
    return elt;
  }

}
