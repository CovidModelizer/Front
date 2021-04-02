import {Component, OnInit} from '@angular/core';
import {ChartDataSets} from 'chart.js';
import {Label} from 'ng2-charts';
import {Utils} from '../../shared/utils';
import {DonneesReellesService} from '../donnees-reelles.service';

@Component({
  selector: 'app-actual-graph',
  templateUrl: './actual-graph.component.html',
  styleUrls: ['./actual-graph.component.css']
})
export class ActualGraphComponent implements OnInit {

  realValueData: number[] | undefined;
  months: any[] | undefined;

  lineChartData: ChartDataSets[] | undefined;
  lineChartLabels: Label[] | undefined;
  lineChartOptions = {
    responsive: true
  };
  lineChartLegend = true;
  lineChartType = 'line';

  constructor(private donneesReellesService: DonneesReellesService) {
  }

  ngOnInit(): void {
    /*
    this.situationReelleService.getNbCasSinceBeginning().subscribe(
    (result) => {
      this.realValueData = result;
    }, (error: any) => {
      console.log(error);
    });
     */
    this.realValueData = [5500, 7000, 4000, 4500, 8000, 10000, 3000, 7000];
    this.lineChartData = [{data: this.realValueData, label: 'Real value', lineTension: 0}];

    this.months = Utils.getAllMonthsSinceTheBeginning(this.months);
    this.lineChartLabels = this.months;
  }

}
