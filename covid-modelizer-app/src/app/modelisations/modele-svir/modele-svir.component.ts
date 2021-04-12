import { Component, OnInit } from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Label} from 'ng2-charts';
import {ModelisationsService} from '../modelisations.service';
import {DonneesReellesService} from '../../donnees-reelles/donnees-reelles.service';

const MODEL = 'SVR';

@Component({
  selector: 'app-modele-svir',
  templateUrl: './modele-svir.component.html',
  styleUrls: ['./modele-svir.component.css']
})
export class ModeleSvirComponent implements OnInit {

  titreGraphe = 'Mise en comparaison entre les vaccinations cumulées réelles et modélisées';
  donneesReellesCumules: number[] | undefined;
  donneesModeliseesCumulees: number[] | undefined;
  labelDonneesReellesCumulees = 'Vaccinations réelles';
  labelDonneesModelisees = 'Vaccinations modélisées';
  days: any[] | undefined;
  chartData: ChartDataSets[] | undefined;
  chartLabels: Label[] | undefined;
  chartOptions: ChartOptions | undefined;
  chartLegend = true;
  chartType: ChartType = 'bar';

  constructor(private modelisationsService: ModelisationsService, private donneesReellesService: DonneesReellesService) {
    this.donneesReellesCumules = new Array<number>();
    this.donneesModeliseesCumulees = new Array<number>();
  }

  ngOnInit(): void {
    this.days = [];
    this.setChartLegends();
    this.getAllDataToDisplay();
    this.chartData = [
      { data: this.donneesReellesCumules, label: this.labelDonneesReellesCumulees },
      { data: this.donneesModeliseesCumulees, label: this.labelDonneesModelisees, type: 'line', lineTension: 0, fill: false }
    ];
    this.chartLabels = this.days;
  }

  /**
   * Labels des axes du graphe
   */
  setChartLegends() {
    this.chartOptions = {
      responsive: true,
      scales: {
        yAxes: [
         {
          display: true,
          scaleLabel: {
           display: true,
           labelString: "Cumul de vaccinations",
          },
         },
        ],
        xAxes: [
         {
          scaleLabel: {
           display: true,
           labelString: "Date",
          },
         },
        ],
       },
    };
  }

  getAllDataToDisplay(): void {
    // Date à partir de laquelle on commence la récupération des données réelles (date de la première prédiction)
    let dateDebutGraphe: any;

    // Récupération des données modélisées cumulées à afficher
    let donneesModeliseesCumulees = new Array<number>();
    this.modelisationsService.getDonneesModeliseesByModel('vaccination', MODEL).subscribe(data => {
    dateDebutGraphe = data[0].date;
    for(let elt of data) {
      donneesModeliseesCumulees.push(Number(elt.value));
      // Récupération de la plage de temps sur laquelle faire le graphe
      this.days?.push(elt.date);
    }
    });
    this.donneesModeliseesCumulees = donneesModeliseesCumulees;

    // Récupération des données réelles cumulées à afficher
    let donneesReellesCumules = new Array<number>();
    this.donneesReellesService.getAllSituationsReelles().subscribe(data => {
      for(let elt of data) {
        // On ne récupère que les valeurs à partir de la date de la 1ère prédiction
        if(elt.date >= dateDebutGraphe) {
          donneesReellesCumules.push(Number(elt.svirV));
        }
      }
    });
    this.donneesReellesCumules = donneesReellesCumules;
  }

}
