import { Component, OnInit } from '@angular/core';
import {SituationReelleService} from '../situation-reelle.service';
import {SituationReelle} from '../SituationReelle';

@Component({
  selector: 'app-actual-data',
  templateUrl: './actual-data.component.html',
  styleUrls: ['./actual-data.component.css']
})
export class ActualDataComponent implements OnInit {

  allSituationsReelles: Array<SituationReelle> | undefined;

  constructor(private situationReelleService: SituationReelleService) { }

  ngOnInit(): void {
    // this.getAllSituationsReelles();
    // console.log(this.allSituationsReelles);
  }

  getAllSituationsReelles(): void {
    this.situationReelleService.getAllSituationReelle().subscribe(
      (result: { situationsReelles: any }) => {
        this.allSituationsReelles = result.situationsReelles;
      }, (error: any) => {
        console.log(error);
      }
    );

  }

}
