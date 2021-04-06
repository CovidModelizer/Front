import {Component, OnInit, Input} from '@angular/core';
import {SituationReelle} from '../SituationReelle';

@Component({
  selector: 'app-actual-data',
  templateUrl: './actual-data.component.html',
  styleUrls: ['./actual-data.component.css']
})
export class ActualDataComponent implements OnInit {

  @Input() allSituationsReelles: Array<SituationReelle>;
  currentSituationReelle: SituationReelle;

  constructor() {
    this.allSituationsReelles = new Array<SituationReelle>();
    this.currentSituationReelle = new SituationReelle();
  }

  ngOnInit(): void {
    // Laisser le temps au programme de récupérer toutes les données SituationReelle
    setTimeout(() => { this.getCurrentSituationReelle(); }, 20);
  }

  

  getCurrentSituationReelle() {
    this.currentSituationReelle = this.allSituationsReelles[this.allSituationsReelles.length-1];
  }


}
