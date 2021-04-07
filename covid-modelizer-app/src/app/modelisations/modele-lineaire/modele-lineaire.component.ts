import { Component, Input, OnInit } from '@angular/core';
import {ChartDataSets} from 'chart.js';
import {Label} from 'ng2-charts';
import {ModelisationsService} from '../modelisations.service';
import {DonneesReellesService} from '../../donnees-reelles/donnees-reelles.service';
import {Utils} from '../../shared/utils';

@Component({
  selector: 'app-modele-lineaire',
  templateUrl: './modele-lineaire.component.html',
  styleUrls: ['./modele-lineaire.component.css']
})
export class ModeleLineaireComponent implements OnInit {

  /**
   * Bar & Line Chart in a chart : https://stackblitz.com/edit/ng2-charts-bar-and-line
   */

  // Vaccin ou Infections
  @Input() categorie = '';
  titreGraphe = '';
  casOuVaccinsCumules: number[] | undefined;
  donneesModeliseesCumulees: number[] | undefined;
  labelCasOuVaccinsCumules = '';
  labelDonneesModelisees = '';
  days: any[] | undefined;
  chartData: ChartDataSets[] | undefined;
  chartLabels: Label[] | undefined;
  chartOptions = {
    responsive: true
  };
  chartLegend = true;
  //chartType = 'bar';
  chartType = 'line';

  constructor(private modelisationsService: ModelisationsService, private donneesReellesService: DonneesReellesService) {
    this.casOuVaccinsCumules = new Array<number>();
    this.donneesModeliseesCumulees = new Array<number>();
  }

  ngOnInit(): void {
    this.setTitreGraphe();
    this.setLabelCasOuVaccinsCumules();
    this.setLabelDonneesModelisees();
    this.getAllDataToDisplay();
    /**
     * TODO : Afficher le second dataset en histogramme et sur les bonnes dates : https://www.chartjs.org/docs/latest/charts/bar.html
     */
    this.chartData = [
      { data: this.casOuVaccinsCumules, label: this.labelCasOuVaccinsCumules, fill: false}/*,
      { data: this.donneesModeliseesCumulees, label: this.labelDonneesModelisees, type: 'line', lineTension: 0 },*/
    ];
    this.chartLabels = Utils.getAllDaysSinceTheBeginningPlusOneMonth(this.days);
  }

  setTitreGraphe(): void {
    if(this.categorie === 'vaccin') {
      this.titreGraphe = 'Comparaison vaccinations cumulées réelles et modélisées par jour';
    } else {
      this.titreGraphe = 'Comparaison infections cumulées réelles et modélisées par jour';
    }
  }

  setLabelCasOuVaccinsCumules(): void {
    if(this.categorie === 'vaccin') {
      this.labelCasOuVaccinsCumules = 'Vaccinations réelles';
    } else {
      this.labelCasOuVaccinsCumules = 'Infections réelles';
    }
  }

  setLabelDonneesModelisees(): void {
    if(this.categorie === 'vaccin') {
      this.labelDonneesModelisees = 'Vaccinations modélisées';
    } else {
      this.labelDonneesModelisees = 'Infections modélisées';
    }
  }

  getAllDataToDisplay(): void {
    let casOuVaccinsCumules = new Array<number>();
    this.donneesReellesService.getAllSituationsReelles().subscribe(data => {
      if(this.categorie === 'vaccin') {
        for(let elt of data) {
          casOuVaccinsCumules.push(Number(elt.cumulPremieresInjections));
        }
      } else if(this.categorie === 'infections') {
        for(let elt of data) {
          casOuVaccinsCumules.push(Number(elt.cumulCasConfirmes));
        }
      } else {
        // Error
        console.log('Error : categorie doit être égale à \'vaccin\' ou \'infections\' !');
      }
    });
    this.casOuVaccinsCumules = casOuVaccinsCumules;
    let donneesModeliseesCumulees = new Array<number>();
    this.modelisationsService.getVaccinationsLinéaire().subscribe(data => {
      console.log(data);
      if(this.categorie === 'vaccin') {
        for(let elt of data) {
          donneesModeliseesCumulees.push(Number(elt.value));
        }
      }
    });
    console.log(donneesModeliseesCumulees);
    this.donneesModeliseesCumulees = donneesModeliseesCumulees;
  }

}
