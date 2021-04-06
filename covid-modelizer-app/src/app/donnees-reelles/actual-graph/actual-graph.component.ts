import {Component, OnInit, Input} from '@angular/core';
import {ChartDataSets} from 'chart.js';
import {Label} from 'ng2-charts';
import {Utils} from '../../shared/utils';
import {DonneesReellesService} from '../donnees-reelles.service';
import {SituationReelle} from '../SituationReelle';

@Component({
  selector: 'app-actual-graph',
  templateUrl: './actual-graph.component.html',
  styleUrls: ['./actual-graph.component.css']
})
export class ActualGraphComponent implements OnInit {

  @Input() allSituationsReelles: Array<SituationReelle>;
  nbCasCumulesDepuisDebut: Array<number>;

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
    this.allSituationsReelles = new Array<SituationReelle>();
    this.nbCasCumulesDepuisDebut = new Array<number>();
  }

  ngOnInit(): void {
    setTimeout(() => { this.fillCasFromAllData(); }, 200);
    this.realValueData = this.nbCasCumulesDepuisDebut;
    this.lineChartData = [{data: this.realValueData, label: 'Real value', lineTension: 0}];
    this.lineChartLabels = Utils.getAllDaysSinceTheBeginning(this.days);
  }

  fillCasFromAllData() {
    for(let elt of this.allSituationsReelles){
      this.nbCasCumulesDepuisDebut.push(Number(elt.casConfirmes));
    }
  }

}
