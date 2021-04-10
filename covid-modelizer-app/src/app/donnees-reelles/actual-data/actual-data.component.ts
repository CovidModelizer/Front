import {Component, OnInit, Input} from '@angular/core';
import {SituationReelle} from '../../shared/model/SituationReelle';
import { DonneesReellesService } from '../donnees-reelles.service';
import {Utils} from '../../shared/utils';

const REAL_DATE_JOUR = new Date();
const DATE_DEBUT_EPIDEMIE = new Date('2020-03-02'); // recup le 1er élément de getAllSituationsReelles ?
const DATE_VEILLE = new Date(new Date().valueOf() - 1000*60*60*24);

@Component({
  selector: 'app-actual-data',
  templateUrl: './actual-data.component.html',
  styleUrls: ['./actual-data.component.css']
})
export class ActualDataComponent implements OnInit {

  @Input() currentSituationReelle: SituationReelle;
  donneesJourTitle = 'Aujourd\'hui';
  dateDonneesAffichees: Date;
  DATE_VEILLE: Date;  // Date dernières données dispo (cf ngOnInit ci-dessous)

  constructor(private donneesReellesService: DonneesReellesService) {
    this.currentSituationReelle = new SituationReelle();
    this.dateDonneesAffichees = REAL_DATE_JOUR; // Juste pour de l'initialisation
    this.DATE_VEILLE = REAL_DATE_JOUR           // Juste pour de l'initialisation
  }

  ngOnInit(): void {
    this.dateDonneesAffichees = new Date(this.currentSituationReelle.getDate().valueOf() - 1000*60*60*24);
    this.DATE_VEILLE = this.currentSituationReelle.date;
  }

  isGoingBackPossible(): boolean {
    return Utils.isDate1BeforeDate2(DATE_DEBUT_EPIDEMIE, this.dateDonneesAffichees);
  }

  isGoingAfterPossible(): boolean {
    return Utils.isDate1BeforeDate2(this.dateDonneesAffichees, this.DATE_VEILLE);
  }

  /**
   * 
   * @param newTitleDate -1 = jour précédent & 1 = jour suivant
   */
  goOneDayBeforeOrAfter(nbJoursToGo: number): void {
    if((nbJoursToGo > 0 && this.isGoingAfterPossible()) || (nbJoursToGo < 0 && this.isGoingBackPossible())) {
      let dateDonneesAAfficher = Utils.getDayBeforeOrAfterGivenDate(this.dateDonneesAffichees, nbJoursToGo);
      this.donneesReellesService.getSituationReelleByDate(dateDonneesAAfficher).subscribe(data => {
        this.currentSituationReelle = data[0];
      });
      this.setDonneesJoursTitle(new Date(dateDonneesAAfficher));
    } else {
      console.log('ERROR : Action impossible !');
      // ERROR
    }
    
  }

  setDonneesJoursTitle(newTitleDate: Date): void {
    if(Utils.isDate1EqualsDate2(newTitleDate, this.DATE_VEILLE)) this.donneesJourTitle = 'Aujourd\'hui';
    else this.donneesJourTitle = Utils.getDayBeforeOrAfterGivenDate(newTitleDate, 0); // Juste pour format string
    // MaJ la date des données affichées pour le prochain appel
    this.dateDonneesAffichees = new Date(newTitleDate);
  }

  


}
