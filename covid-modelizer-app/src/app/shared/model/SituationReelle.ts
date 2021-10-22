export class SituationReelle {

  date: Date;
  r0: string;
  cumulCasConfirmes: string;
  nouveauxCasConfirmes: string;
  cumulCasConfirmesEhpad: string;
  nouveauxCasConfirmesEhpad: string;
  casPossiblesEhpad: string;
  cumulGueris: string;
  nouveauxGueris: string;
  cumulDeces: string;
  nouveauxDeces: string;
  cumulDecesEhpad: string;
  nouveauxDecesEhpad: string;
  reanimation: string;
  hospitalises: string;
  testsRealises: string;
  testsPositifs: string;
  nouvellesHospitalisations: string;
  nouvellesReanimations: string;
  cumulPremieresInjections: string;
  nouvellesPremieresInjections: string;
  stockNombreTotalDoses: string;
  stockNombreDosesPfizer: string;
  stockNombreDosesModerna: string;
  stockEhpadNombreDosesPfizer: string;
  cumulLivraisonsNombreTotalDoses: string;
  nouvellesLivraisonsNombreTotalDoses: string;
  cumulLivraisonsNombreDosesPfizer: string;
  nouvellesLivraisonsNombreDosesPfizer: string;
  cumulLivraisonsNombreDosesModerna: string;
  nouvellesLivraisonsNombreDosesModerna: string;
  totalPrisesRendezVousSemaine: string;
  prisesRendezVousSemaineRang1: string;
  prisesRendezVousSemaineRang2: string;
  sirS: string;
  sirI: string;
  sirR: string;
  svirS: string;
  svirV: string;
  svirI: string;
  svirR: string;
  svirNouveauxTauxVaccination: string;

  constructor() {
    this.nouveauxCasConfirmes = '';
    this.cumulCasConfirmes = '';
    this.nouveauxCasConfirmesEhpad = '';
    this.cumulCasConfirmesEhpad = '';
    this.casPossiblesEhpad = '';
    this.cumulPremieresInjections = '';
    this.date = new Date();
    this.nouveauxDeces = '';
    this.cumulDeces = '';
    this.nouveauxDecesEhpad = '';
    this.cumulDecesEhpad = '';
    this.nouveauxGueris = '';
    this.cumulGueris = '';
    this.hospitalises = '';
    this.nouvellesLivraisonsNombreTotalDoses = '';
    this.cumulLivraisonsNombreTotalDoses = '';
    this.cumulLivraisonsNombreDosesPfizer = '';
    this.nouvellesLivraisonsNombreDosesPfizer = '';
    this.cumulLivraisonsNombreDosesModerna = '';
    this.nouvellesLivraisonsNombreDosesModerna = '';
    this.nouvellesHospitalisations = '';
    this.nouvellesPremieresInjections = '';
    this.nouvellesReanimations = '';
    this.prisesRendezVousSemaineRang1 = '';
    this.prisesRendezVousSemaineRang2 = '';
    this.r0 = '';
    this.reanimation = '';
    this.stockEhpadNombreDosesPfizer = '';
    this.stockNombreDosesModerna = '';
    this.stockNombreDosesPfizer = '';
    this.stockNombreTotalDoses = '';
    this.testsPositifs = '';
    this.testsRealises = '';
    this.totalPrisesRendezVousSemaine = '';
    this.sirS = '';
    this.sirI = '';
    this.sirR = '';
    this.svirS = '';
    this.svirV = '';
    this.svirI = '';
    this.svirR = '';
    this.svirNouveauxTauxVaccination = '';
  }

  getDate(): Date {
    return this.date;
  }

  setDate(newDate: Date): void {
    this.date = newDate;
  }

}
