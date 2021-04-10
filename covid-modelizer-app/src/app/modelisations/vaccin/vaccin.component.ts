import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { DonneesReellesService } from 'src/app/donnees-reelles/donnees-reelles.service';
import { SituationReelle } from 'src/app/shared/model/SituationReelle';

@Component({
  selector: 'app-vaccin',
  templateUrl: './vaccin.component.html',
  styleUrls: ['./vaccin.component.css']
})
export class VaccinComponent implements OnInit {

  public currentSituationReelle: SituationReelle;
  private route: ActivatedRoute;
  public modele = 'lin'; // On tombe sur le modèle linéaire par défaut
  public categorie = 'vaccin';

  // tslint:disable-next-line:variable-name
  constructor(private _route: ActivatedRoute, private donneesReellesService: DonneesReellesService) {
    this.route = _route;
    this.currentSituationReelle = new SituationReelle();
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.modele = params.modele;
    });
    this.getLastSituationReelleAvailable();
  }

  getLastSituationReelleAvailable(): void {
    this.donneesReellesService.getAllSituationsReelles().subscribe(data => {
			this.currentSituationReelle = data[data.length-1];
    });
  }



}
