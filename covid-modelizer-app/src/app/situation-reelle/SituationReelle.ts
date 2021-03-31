export class SituationReelle {
  casConfirmes = 0;
  deces = 0;
  decesEhpad = 0;
  // TODO : Ajouter tous les attributs

  constructor(casConfirmes: number, deces: number, decesEhpad: number) {
    this.casConfirmes = casConfirmes;
    this.deces = deces;
    this.decesEhpad = decesEhpad;
  }
}
