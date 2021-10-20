import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DonneesReellesService} from 'src/app/donnees-reelles/donnees-reelles.service';
import {SituationReelle} from 'src/app/shared/model/SituationReelle';

@Component({
  selector: 'app-vaccinations',
  templateUrl: './vaccinations.component.html',
  styleUrls: ['./vaccinations.component.css']
})
export class VaccinationsComponent implements OnInit {

  public currentSituationReelle: SituationReelle;
  public modele = 'mul'; // On tombe sur le modèle de ML Multivariée par défaut
  public categorie = 'vaccination';
  private route: ActivatedRoute;

  constructor(private activatedRoute: ActivatedRoute, private donneesReellesService: DonneesReellesService) {
    this.route = activatedRoute;
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
      this.currentSituationReelle = data[data.length - 1];
    });
  }
}
