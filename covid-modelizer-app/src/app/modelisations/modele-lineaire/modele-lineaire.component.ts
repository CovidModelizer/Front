import { Component, Input, OnInit } from '@angular/core';
import {ChartDataSets} from 'chart.js';
import {Label} from 'ng2-charts';
import {ModelisationsService} from '../modelisations.service';
import {Utils} from '../../shared/utils';

@Component({
  selector: 'app-modele-lineaire',
  templateUrl: './modele-lineaire.component.html',
  styleUrls: ['./modele-lineaire.component.css']
})
export class ModeleLineaireComponent implements OnInit {

  // Vaccin ou Infections
  // TODO : Affichage cumulPremieresInjections dans graphe
  @Input() categorie = '';

  realValueData: number[] | undefined;
  months: any[] | undefined;
  lineChartData: ChartDataSets[] | undefined;
  lineChartLabels: Label[] | undefined;
  lineChartOptions = {
    responsive: true
  };
  lineChartLegend = true;
  lineChartType = 'line';

  constructor(private modelisationsService: ModelisationsService) { }

  ngOnInit(): void {
    /*
    this.modelisations.getSomething().subscribe(
    (result) => {
      this.realValueData = result;
    }, (error: any) => {
      console.log(error);
    });
     */
    this.realValueData = [5500, 7000, 4000, 4500, 8000, 10000, 3000, 7000];
    this.lineChartData = [{ data: this.realValueData, label: 'Real value', lineTension: 0 }];

    this.months = Utils.getAllMonthsSinceTheBeginning(this.months);
    this.lineChartLabels = this.months;

  }

}
