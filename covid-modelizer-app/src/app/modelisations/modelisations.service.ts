import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelisationsService {

  private URL_REST_API = 'http://152.228.165.238:8080/modelisation';

  constructor(private http: HttpClient) {
  }

  getDonneesModeliseesByModel(categorie: string, model: string): Observable<any> {
    return this.http.get(this.URL_REST_API + '/'+categorie+'?model='+model);
  }

}
