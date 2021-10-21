import {Component, OnInit} from '@angular/core';

const LIBELLES_AGES = ['0à11ans', '12à17ans', '18à54ans', '55ansEtPlus'];

@Component({
  selector: 'app-se-faire-vacciner',
  templateUrl: './se-faire-vacciner.component.html',
  styleUrls: ['./se-faire-vacciner.component.css']
})
export class SeFaireVaccinerComponent implements OnInit {


  public age = '';
  private enceinte = '';
  private pro = '';
  private malade = '';

  // -1 : rouge, 0 : gris, 1 : vert
  private eligiblePfizer = 0;
  private eligibleModerna = 0;
  private eligibleAstraZeneca = 0;
  private eligibleJanssen = 0;
  private colorPfizer = '';
  private colorModerna = '';
  private colorAstrazeneca = '';
  private colorJanssen = '';

  private commentaire1 = '';
  private datePossibleVaccination = '';

  constructor() {
  }

  ngOnInit(): void {

  }

  displayProForm(): boolean {
    return ((this.age === LIBELLES_AGES[1] || this.age === LIBELLES_AGES[2]) && this.enceinte === 'non');
  }

  displayMaladeForm(): boolean {
    return this.displayProForm() && this.pro === 'non';
  }

  displayResult(): boolean {
    return (this.age === LIBELLES_AGES[0] ||
      (this.age === LIBELLES_AGES[1] && this.pro === 'oui') ||
      (this.age === LIBELLES_AGES[1] && this.malade !== '') ||
      (this.age === LIBELLES_AGES[2] && this.pro === 'oui') ||
      (this.age === LIBELLES_AGES[2] && this.malade !== '') ||
      (this.age === LIBELLES_AGES[3] && this.enceinte === 'non') ||
      this.enceinte === 'oui');
  }

  resetValues(niveau: number): void {
    switch (niveau) {
      case (0): {
        this.enceinte = '';
        this.pro = '';
        this.malade = '';
        break;
      }
      case (1): {
        this.pro = '';
        this.malade = '';
        break;
      }
      case (2): {
        this.malade = '';
        break;
      }
      default: {
        // Error
        break;
      }
    }
  }

  // Retourne vrai si eligible a au - un des 3 vaccins dispos
  estEligible(age: string, enceinte: string, pro: string, malade: string): void {
    if (age !== '') {
      if (age !== this.age) {
        this.resetValues(0);
      }
      this.age = age;
      this.commentaire1 = '';
      this.datePossibleVaccination = '';
    } else if (enceinte !== '') {
      if (enceinte !== this.enceinte) {
        this.resetValues(1);
      }
      this.enceinte = enceinte;
      this.commentaire1 = '';
      this.datePossibleVaccination = '';
    } else if (pro !== '') {
      if (pro !== this.pro) {
        this.resetValues(2);
      }
      this.pro = pro;
      this.commentaire1 = '';
      this.datePossibleVaccination = '';
    } else if (malade !== '') {
      this.malade = malade;
      this.commentaire1 = '';
      this.datePossibleVaccination = '';
    }
    if (!this.displayResult()) {
      // C'est pas le moment d'afficher les résultats
    } else {
      this.colorPfizer = '#717472';               // Gris
      this.colorModerna = '#717472';              // Gris
      this.colorAstrazeneca = '#717472';          // Gris
      this.colorJanssen = '#717472';              // Gris
      if (this.enceinte === 'oui') {
        this.commentaire1 = 'Il est possible de vacciner les femmes enceintes dès le premier trimestre de grossesse.';
        this.datePossibleVaccination = 'Toutefois, votre situation peut être réévaluée par un spécialiste.';
      } else {
        switch (this.age) {
          case (LIBELLES_AGES[0]): {
            this.colorPfizer = '#b92e2e';         // Rouge
            this.colorModerna = '#b92e2e';        // Rouge
            this.colorAstrazeneca = '#b92e2e';    // Rouge
            this.colorJanssen = '#b92e2e';        // Rouge
            this.eligiblePfizer = -1;
            this.eligibleModerna = -1;
            this.eligibleAstraZeneca = -1;
            this.eligibleJanssen = -1;
            this.commentaire1 = 'Depuis le 15 juin 2021, toute personne âgée de 12 ans et plus peut se faire vacciner.';
            this.datePossibleVaccination = 'Toutefois, votre situation peut être réévaluée par un spécialiste.';
            break;
          }
          case (LIBELLES_AGES[1]):
          case (LIBELLES_AGES[2]): {
            this.colorPfizer = '#168838';         // Vert
            this.colorModerna = '#168838';        // Vert
            this.colorAstrazeneca = '#b92e2e';    // Rouge
            this.colorJanssen = '#b92e2e';        // Rouge
            this.eligiblePfizer = 1;
            this.eligibleModerna = 1;
            this.eligibleAstraZeneca = -1;
            this.eligibleJanssen = -1;
            this.commentaire1 = 'Vous êtes éligible à la vaccination.';
            this.datePossibleVaccination += 'Depuis le 15 juin 2021.';
            break;
          }
          case (LIBELLES_AGES[3]): {
            this.colorPfizer = '#168838';         // Vert
            this.colorModerna = '#168838';        // Vert
            this.colorAstrazeneca = '#168838';    // Vert
            this.colorJanssen = '#168838';        // Vert
            this.eligiblePfizer = 1;
            this.eligibleModerna = 1;
            this.eligibleAstraZeneca = 1;
            this.eligibleJanssen = 1;
            this.commentaire1 = 'Vous êtes éligible à la vaccination.';
            this.datePossibleVaccination += 'Depuis le 15 juin 2021.';
            break;
          }
          default: {
            break;
          }
        }
      }
    }
  }
}
