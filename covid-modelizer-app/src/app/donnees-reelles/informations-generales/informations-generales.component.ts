import { Component, OnInit } from '@angular/core';
import { DonneesReellesService } from '../donnees-reelles.service';
import { SituationReelle } from '../../shared/model/SituationReelle';

@Component({
	selector: 'app-informations-generales',
	templateUrl: './informations-generales.component.html',
	styleUrls: ['./informations-generales.component.css']
})
export class InformationsGeneralesComponent implements OnInit {

	allCasParJour: Array<number>;
	currentSituationReelle: SituationReelle;

	constructor(private donneesReellesService: DonneesReellesService) {
		this.allCasParJour = new Array<number>();
		this.currentSituationReelle = new SituationReelle();
	}

	ngOnInit(): void {
		this.allCasParJour = this.getAllCasParJour();
	}

	getAllCasParJour(): Array<number> {
		let dataToDisplay = new Array<number>();
		this.donneesReellesService.getAllSituationsReelles().subscribe(data => {
			this.currentSituationReelle = data[data.length - 1];
			for (let elt of data) {
				dataToDisplay.push(Number(elt.nouveauxCasConfirmes));
			}
		});
		return dataToDisplay;
	}
}
