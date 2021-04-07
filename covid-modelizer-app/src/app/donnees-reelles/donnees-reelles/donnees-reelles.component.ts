import { Component, OnInit } from '@angular/core';
import {DonneesReellesService} from '../donnees-reelles.service';
import {SituationReelle} from '../../shared/model/SituationReelle';

@Component({
  selector: 'app-donnees-reelles',
  templateUrl: './donnees-reelles.component.html',
  styleUrls: ['./donnees-reelles.component.css']
})
export class DonneesReellesComponent implements OnInit {

	allSituationsReelles: Array<SituationReelle>;

	constructor(private donneesReellesService: DonneesReellesService) { 
		this.allSituationsReelles = new Array<SituationReelle>();
	}

  	ngOnInit(): void {
     	this.getAllSituationsReelles();
      	//console.log(this.allSituationsReelles);
  	}

	getAllSituationsReelles(): void {
		console.log('getAllSituationsReelles');
      	this.donneesReellesService.getAllSituationReelle().subscribe((data) => {
			console.log(data);
	  		//sessionStorage.setItem("allSituationsReelles", data);
        	this.allSituationsReelles = <SituationReelle[]>data;
      	});
  	}
}
