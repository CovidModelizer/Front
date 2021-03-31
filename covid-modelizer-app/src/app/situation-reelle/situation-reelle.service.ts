import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SituationReelleService {

  private url = 'http://152.228.165.238:8080';

  constructor(private http: HttpClient) { }

  getAllSituationReelle(): Observable<any> {
    return this.http.get(this.url + '/donneesReelles');
  }

  // TODO : Autres appels APIs

  getNbCasSinceBeginning(): Observable<any> {
    return this.http.get(this.url + '/findAllUntilToday');
  }
}
