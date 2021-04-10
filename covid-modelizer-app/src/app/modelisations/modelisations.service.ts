import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelisationsService {

  private URL_REST_API = 'http://api.covid-modelizer.fr/modelisation';
  public days: Array<any>;

  constructor(private http: HttpClient) {
    this.days = new Array<any>();
  }

  // ******************* Appels REST ************************
  getDonneesModeliseesByModel(categorie: string, model: string): Observable<any> {
    return this.http.get(this.URL_REST_API + '/'+categorie+'?model='+model);
  }

}
