import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { Utils } from '../../shared/utils';
import { DonneesReellesService } from '../donnees-reelles.service';
import { SituationReelle } from '../../shared/model/SituationReelle';

@Component({
  selector: 'app-actual-graph',
  templateUrl: './actual-graph.component.html',
  styleUrls: ['./actual-graph.component.css']
})
export class ActualGraphComponent implements OnInit {

  @Input() allCasParJour: Array<number>;

  realValueData: number[] | undefined;
  days: any[] | undefined;

  lineChartData: ChartDataSets[] | undefined;
  lineChartLabels: Label[] | undefined;
  lineChartOptions = {
    responsive: true
  };
  lineChartLegend = true;
  lineChartType = 'line';

  constructor(private donneesReellesService: DonneesReellesService) {
    this.allCasParJour = new Array<number>();
  }

  ngOnInit(): void {
    this.realValueData = this.allCasParJour;
    this.lineChartData = [{ data: this.realValueData, label: 'Infections quotidiennes', lineTension: 0 }];
    this.lineChartLabels = Utils.getAllDaysSinceTheBeginning(this.days);
  }

}
