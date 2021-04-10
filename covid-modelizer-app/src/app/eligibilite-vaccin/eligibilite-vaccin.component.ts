import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

const LIBELLES_AGES = ['moins18', 'entre18et49', 'entre50et54', 'entre55et69', 'plus70'];

@Component({
  selector: 'app-eligibilite-vaccin',
  templateUrl: './eligibilite-vaccin.component.html',
  styleUrls: ['./eligibilite-vaccin.component.css']
})
export class EligibiliteVaccinComponent implements OnInit {
  

  public age = '';
  private enceinte = '';
  private pro = '';
  private malade = '';

  // -1 : rouge, 0 : gris, 1 : vert
  private eligiblePfizer = 0;
  private eligibleModerna = 0;
  private eligibleAstraZeneca = 0;
  private colorPfizer = '';
  private colorModerna = '';
  private colorAstrazeneca = ''; 

  private commentaire1 = '';
  private datePossibleVaccination = '';

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

  resetValues(niveau:number):void{
    switch(niveau){
      case(0):{
        this.enceinte='';
        this.pro='';
        this.malade='';
        break;
      }
      case(1):{
        this.pro='';
        this.malade='';
        break;
      }
      case(2):{
        this.malade='';
        break;
      }
      default:{
        //Error
        break;
      }
    }
  }

  // Retourne vrai si eligible a au - un des 3 vaccins dispos
  estEligible(age:string, enceinte:string, pro:string, malade:string): void {
    if(age!==''){
      if(age!==this.age) this.resetValues(0);
      this.age = age;
      this.commentaire1 = '';
      this.datePossibleVaccination = '';
    }
    else if(enceinte!==''){
      if(enceinte!==this.enceinte) this.resetValues(1)
      this.enceinte = enceinte;
      this.commentaire1 = '';
      this.datePossibleVaccination = '';
    }
    else if(pro!==''){
      if(pro!==this.pro) this.resetValues(2);
      this.pro = pro;
      this.commentaire1 = '';
      this.datePossibleVaccination = '';
    }
    else if(malade!==''){
      this.malade = malade;
      this.commentaire1 = '';
      this.datePossibleVaccination = '';
    }
    if(this.displayResult() === false) {
      // C'est pas le moment d'afficher les résultats
    } else {
      switch(this.age) {
        case(LIBELLES_AGES[0]): {
          this.colorPfizer = '#b92e2e'; //Rouge
          this.colorModerna = '#b92e2e'; //Rouge
          this.colorAstrazeneca = '#b92e2e'; //Rouge
          this.eligiblePfizer = -1;
          this.eligibleModerna = -1;
          this.eligibleAstraZeneca = -1;
          this.commentaire1 = 'La vaccination contre la COVID-19 n\'est pas autorisée pour les personnes mineures.';
          break;
        }
        case(LIBELLES_AGES[1]): {
          if(this.enceinte === 'oui') {
            this.colorPfizer = '#717472'; //Gris
            this.colorModerna = '#717472'; //Gris
            this.colorAstrazeneca = '#717472'; //Gris
            this.commentaire1 = 'Votre situation doit être évaluée par un spécialiste.';
          } else if(this.enceinte === 'non'){
            if(this.pro === 'oui') {
              this.colorPfizer = '#168838'; //Vert
              this.colorModerna = '#168838';
              this.eligiblePfizer = 1;
              this.eligibleModerna = 1;
              this.colorAstrazeneca = '#b92e2e';
              this.eligibleAstraZeneca = -1;
              this.commentaire1 = 'Vous êtes éligible à la vaccination.';
            } else if(this.pro === 'non') {
              if(this.malade === 'oui') {
                this.colorPfizer = '#168838'; //Vert
                this.colorModerna = '#168838';
                this.eligiblePfizer = 1;
                this.eligibleModerna = 1;
                this.colorAstrazeneca = '#b92e2e';
                this.eligibleAstraZeneca = -1;
                this.commentaire1 = 'Vous êtes éligible à la vaccination.';
              } else if(this.malade === 'non') {
                this.colorPfizer = '#b92e2e'; //Rouge
                this.colorModerna = '#b92e2e'; //Rouge
                this.colorAstrazeneca = '#b92e2e';
                this.eligiblePfizer = -1;
                this.eligibleModerna = -1;
                this.eligibleAstraZeneca = -1;
                this.commentaire1 = 'Vous n\'êtes pas encore éligible à la vaccination contre la COVID-19.';
                this.datePossibleVaccination += 'Date de vaccination possible : à partir de mi-juin.';
                 
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
        case(LIBELLES_AGES[2] || LIBELLES_AGES[3]): {
          if(this.pro === 'oui') {
            this.colorPfizer = '#168838';
            this.colorModerna = '#168838';
            this.eligiblePfizer = 1;
            this.eligibleModerna = 1;
            this.commentaire1 = 'Vous êtes éligible à la vaccination.';
            if(this.age === LIBELLES_AGES[2]){
              this.eligibleAstraZeneca = -1;
              this.colorAstrazeneca = '#b92e2e'; //Rouge
            }
            else{
              this.eligibleAstraZeneca = 1;
              this.colorAstrazeneca = '#168838'; //Vert
            } 
          } else if(this.pro === 'non') {
            if(this.malade === 'oui') {
              this.colorPfizer = '#168838';
              this.colorModerna = '#168838';
              this.eligiblePfizer = 1;
              this.eligibleModerna = 1;
              this.commentaire1 = 'Vous êtes éligible à la vaccination.';
              if(this.age === LIBELLES_AGES[2]){
                this.eligibleAstraZeneca = -1;
                this.colorAstrazeneca = '#b92e2e'; //Rouge
              }
              else{
                this.eligibleAstraZeneca = 1;
                this.colorAstrazeneca = '#168838'; //Vert
              }
            } else if(this.malade === 'non') {
              this.colorPfizer = '#b92e2e'; //Rouge
              this.colorModerna = '#b92e2e'; //Rouge
              this.colorAstrazeneca = '#b92e2e'; //Rouge
              this.eligiblePfizer = -1;
              this.eligibleModerna = -1;
              this.eligibleAstraZeneca = -1;
              this.commentaire1 = 'Vous n\'êtes pas encore éligible à la vaccination contre la COVID-19.';
              if(this.age === LIBELLES_AGES[2]) {
                this.datePossibleVaccination += 'Date de vaccination possible : à partir de mi-mai.';
              } else {
                this.datePossibleVaccination += 'Date de vaccination possible : à partir de mi-avril pour les personnes âgées de 60 à 70 ans et à partir de mi-mai pour les personnes âgées de 50 à 60 ans.';
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
          this.colorPfizer = '#168838';
          this.colorModerna = '#168838'; 
          this.colorAstrazeneca = '#168838';
          this.eligiblePfizer = 1;
          this.eligibleModerna = 1;
          this.eligibleAstraZeneca = 1;
          this.commentaire1 = 'Vous êtes éligible à la vaccination.';
          break;
        }
        default: {
          console.log('age KO: ' + this.age);
          break;
        }
      }
    }
  }

//TODO
//Fixer le bug des 55-69 ans
}


