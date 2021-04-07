import {Component, OnInit, Input} from '@angular/core';
import {SituationReelle} from '../../shared/model/SituationReelle';

@Component({
  selector: 'app-actual-data',
  templateUrl: './actual-data.component.html',
  styleUrls: ['./actual-data.component.css']
})
export class ActualDataComponent implements OnInit {

  @Input() currentSituationReelle: SituationReelle;

  constructor() {
    this.currentSituationReelle = new SituationReelle();
  }

  ngOnInit(): void {
    
  }


  


}
