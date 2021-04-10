import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SituationReelle} from '../shared/model/SituationReelle';

@Injectable({
  providedIn: 'root'
})
export class DonneesReellesService {

  private URL_REST_API = 'http://api.covid-modelizer.fr/reel';

  constructor(private http: HttpClient) {
  }

  // ******************* Appels REST ********************
  getAllSituationsReelles(): Observable<any> {
    return this.http.get(this.URL_REST_API + '/complet');
  }

  getSituationReelleByDate(date: string): Observable<any> {
    return this.http.get(this.URL_REST_API + '/complet/date?date='+date);
  }

  // ********************** Autres **********************
  getDonneesReellesCumuleesByCategorieEtModelEtDateDebut(categorie: string, model: string, dateDebut: any): any[] {
    console.log(dateDebut);
    // Récupération des données réelles cumulées à afficher
    let donneesReellesCumules = new Array<number>();
    this.getAllSituationsReelles().subscribe(data => {
      if(categorie === 'vaccin') {
        for(let elt of data) {
          // On ne récupère que les valeurs à partir de la date de la 1ère prédiction
          if(elt.date >= dateDebut) {
            donneesReellesCumules.push(Number(this.getDataToReturnSiVaccin(model, elt)));
          }
        }
      } else if(categorie === 'cas') {
        for(let elt of data) {
          if(elt.date >= dateDebut) {
            donneesReellesCumules.push(Number(this.getDataToReturnSiCas(model, elt)));
          }
        }
      } else {
        // ERROR
        console.log('ERROR : categorie doit être égale à \'vaccin\' ou \'cas\' !');
      }
    });
    console.log(donneesReellesCumules);
    return donneesReellesCumules;
  }

  getDataToReturnSiVaccin(model: string, situationReelle: SituationReelle): string {
    let elt = '';
    switch(model) {
      case('LIN'): {
        elt = situationReelle.cumulPremieresInjections;
        break;
      }
      case('SVR'): {
        elt = situationReelle.svirV;
        break;
      }
      case('MCL'): {
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

  getDataToReturnSiCas(model: string, situationReelle: SituationReelle): string {
    let elt = '';
    switch(model) {
      case('LIN'): {
        elt = situationReelle.cumulCasConfirmes;
        break;
      }
      case('SIR'): {
        elt = situationReelle.sirI;
        break;
      }
      case('MCL'): {
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
}
