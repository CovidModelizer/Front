import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

const LIBELLES_AGES = ['moins18', 'entre18et49', 'entre50et54', 'entre55et69', 'plus70'];

@Component({
  selector: 'app-eligibilite-vaccin',
  templateUrl: './eligibilite-vaccin.component.html',
  styleUrls: ['./eligibilite-vaccin.component.css']
})
export class EligibiliteVaccinComponent implements OnInit {
  

  public age = '';
  public enceinte = 'non';
  public pro = '';
  public malade = '';

  // -1 : rouge, 0 : gris, 1 : vert
  public eligiblePfizer = 0;
  public eligibleModerna = 0;
  public eligibleAstraZeneca = 0;

  public commentaire1 = 'Vous êtes éligible à la vaccination.';
  public datePossibleVaccination = 'Date de vaccination possible : ';

  constructor() { 
  }

  ngOnInit(): void {
    
  }

  displayProForm(): boolean {
    return (this.age === LIBELLES_AGES[1] && this.enceinte === 'non') || this.age === LIBELLES_AGES[2] || this.age === LIBELLES_AGES[3];
  }

  displayMaladeForm(): boolean {
    return this.displayProForm() && this.pro === 'non';
  }

  displayResult(): boolean {
    return (this.age === LIBELLES_AGES[0] || 
    (this.age === LIBELLES_AGES[1] && this.enceinte === 'oui') ||
    (this.age === LIBELLES_AGES[1] && this.pro === 'oui') ||
    (this.age === LIBELLES_AGES[1] && this.malade !== '') ||
    (this.age === LIBELLES_AGES[2] && this.pro === 'oui') ||
    (this.age === LIBELLES_AGES[2] && this.malade !== '') ||
    (this.age === LIBELLES_AGES[3] && this.pro === 'oui') ||
    (this.age === LIBELLES_AGES[3] && this.malade !== '') || 
    this.age === LIBELLES_AGES[4])
  }

  // Retourne vrai si eligible a au - un des 3 vaccins dispos
  estEligible(evt: any): void {
    if(this.displayResult() === false) {
      // C'est pas le moment d'afficher les résultats
    } else {
      switch(this.age) {
        case(LIBELLES_AGES[0]): {
          // TODO : Cadres Vaccins en rouge
          this.eligiblePfizer = -1;
          this.eligibleModerna = -1;
          this.eligibleAstraZeneca = -1;
          this.commentaire1 = 'La vaccination contre la COVID-19 n\'est pas autorisée pour les personnes mineures.';
          break;
        }
        case(LIBELLES_AGES[1] || LIBELLES_AGES[2] || LIBELLES_AGES[3]): {
          if(this.enceinte === 'oui') {
            // TODO : Cadres Vaccins en gris (pas sûre de l'éligiblité)
            this.commentaire1 = 'Votre situation doit être évaluée par un spécialiste.';
          } else if(this.enceinte === 'non'){
            if(this.pro === 'oui') {
              this.eligiblePfizer = 1;
              this.eligibleModerna = 1;
              if(this.age === LIBELLES_AGES[1] || this.age === LIBELLES_AGES[2]) {
                this.eligibleAstraZeneca = -1;
              } else {
                this.eligibleAstraZeneca = 1;
              }
            } else if(this.pro === 'non') {
              if(this.malade === 'oui') {
                this.eligiblePfizer = 1;
                this.eligibleModerna = 1;
                if(this.age === LIBELLES_AGES[1] || this.age === LIBELLES_AGES[2]) {
                  this.eligibleAstraZeneca = -1;
                } else {
                  this.eligibleAstraZeneca = 1;
                }
              } else if(this.malade === 'non') {
                this.eligiblePfizer = -1;
                this.eligibleModerna = -1;
                this.eligibleAstraZeneca = -1;
                this.commentaire1 = 'Vous n\'êtes pas encore éligible à la vaccination contre la COVID-19.';
                if(this.age === LIBELLES_AGES[1]) {
                  this.datePossibleVaccination += 'à partir de mi-juin.';
                } else if(this.age === LIBELLES_AGES[2]) {
                  this.datePossibleVaccination += 'à partir de mi-mai.';
                } else {
                  this.datePossibleVaccination += 'à partir de mi-avril pour les personnes âgées de 60 à 70 ans et à partir de mi-mai pour les personnes âgées de 50 à 60 ans.';
                }
              } else {
                console.log('est MALADE KO');
              }
            } else {
              console.log('est PRO KO');
            }
          } else {
            console.log('est ENCEINTE KO');
          }
          break;
        }
        case(LIBELLES_AGES[3]): {
          if(this.pro === 'oui') {
            this.eligiblePfizer = 1;
            this.eligibleModerna = 1;
            this.eligibleAstraZeneca = 1;
          } else if(this.pro === 'non') {
            if(this.malade === 'oui') {
              this.eligiblePfizer = 1;
              this.eligibleModerna = 1;
              this.eligibleAstraZeneca = 1;
            } else if(this.malade === 'non') {
              this.eligiblePfizer = -1;
              this.eligibleModerna = -1;
              this.eligibleAstraZeneca = -1;
              this.commentaire1 = 'Vous n\'êtes pas encore éligible à la vaccination contre la COVID-19.';
              if(this.age === LIBELLES_AGES[1]) {
                this.datePossibleVaccination += 'à partir de mi-juin.';
              } else {
                this.datePossibleVaccination += 'à partir de mi-mai.';
              }
            } else {
              console.log('est MALADE KO');
            }
          } else {
            console.log('est PRO KO');
          }
          break;
        }
        case(LIBELLES_AGES[4]): {
          this.eligiblePfizer = 1;
          this.eligibleModerna = 1;
          this.eligibleAstraZeneca = 1;
          break;
        }
        default: {
          console.log('age KO');
          break;
        }
      }
    }
  }



}


