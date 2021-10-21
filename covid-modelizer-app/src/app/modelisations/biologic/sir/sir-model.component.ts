import {Component, OnInit} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Label} from 'ng2-charts';
import {ModelisationsService} from '../../modelisations.service';
import {DonneesReellesService} from '../../../donnees-reelles/donnees-reelles.service';

const MODEL = 'SIR';

@Component({
  selector: 'app-sir-model',
  templateUrl: './sir-model.component.html',
  styleUrls: ['./sir-model.component.css']
})
export class SirModelComponent implements OnInit {

  titreGraphe = 'Mise en comparaison entre le total actuel d\'infections réelles et modélisées';
  donneesReellesCumules: number[] | undefined;
  nbCasJ21: any = '';
  donneesModeliseesCumulees: number[] | undefined;
  labelDonneesReellesCumulees = 'Infections réelles';
  labelDonneesModelisees = 'Infections modélisées';
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
      {data: this.donneesReellesCumules, label: this.labelDonneesReellesCumulees},
      {
        data: this.donneesModeliseesCumulees,
        label: this.labelDonneesModelisees,
        type: 'line',
        lineTension: 0,
        fill: false
      }
    ];
    this.chartLabels = this.days;
  }

  /**
   * Labels des axes du graphe
   */
  setChartLegends(): void {
    this.chartOptions = {
      responsive: true,
      scales: {
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Total de personnes encore infectées',
            },
          },
        ],
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: 'Date',
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
    const donneesModeliseesCumulees = new Array<number>();
    this.modelisationsService.getDonneesModeliseesByModel('infection', MODEL).subscribe(data => {
      dateDebutGraphe = data[0].date;
      this.nbCasJ21 = data[data.length - 1].value;
      for (const elt of data) {
        donneesModeliseesCumulees.push(Number(elt.value));
        // Récupération de la plage de temps sur laquelle faire le graphe
        this.days?.push(elt.date);
      }
    });
    this.donneesModeliseesCumulees = donneesModeliseesCumulees;

    // Récupération des données réelles cumulées à afficher
    const donneesReellesCumules = new Array<number>();
    this.donneesReellesService.getAllSituationsReelles().subscribe(data => {
      for (const elt of data) {
        // On ne récupère que les valeurs à partir de la date de la 1ère prédiction
        if (elt.date >= dateDebutGraphe) {
          donneesReellesCumules.push(Number(elt.sirI));
        }
      }
    });
    this.donneesReellesCumules = donneesReellesCumules;
  }

  isConfinement(): string {
    if (this.nbCasJ21 > 30000) {
      return 'OUI';
    }
    return 'NON';
  }
}
