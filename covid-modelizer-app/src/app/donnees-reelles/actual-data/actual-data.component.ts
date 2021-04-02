import {Component, OnInit} from '@angular/core';
import {SituationReelle} from '../SituationReelle';
import {DonneesReellesService} from '../donnees-reelles.service';

@Component({
  selector: 'app-actual-data',
  templateUrl: './actual-data.component.html',
  styleUrls: ['./actual-data.component.css']
})
export class ActualDataComponent implements OnInit {

  allSituationsReelles: Array<SituationReelle> | undefined;

  constructor(private donneesReellesService: DonneesReellesService) {
  }

  ngOnInit(): void {
    // this.getAllSituationsReelles();
    // console.log(this.allSituationsReelles);
  }

  getAllSituationsReelles(): void {
    this.donneesReellesService.getAllSituationReelle().subscribe(
      (result: { situationsReelles: any }) => {
        this.allSituationsReelles = result.situationsReelles;
      }, (error: any) => {
        console.log(error);
      }
    );

  }


}
