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

	/*
	constructor(casConfirmes: string, casConfirmesEhpad: string, casPossiblesEhpad: string, cumulPremieresInjections: string, date: Date, deces: string, decesEhpad: string, gueris: string, 
		hospitalises: string, livraisonsCumulNombreDosesModerna: string, livraisonsCumulNombreDosesPfizer: string, livraisonsCumulNombreTotalDoses: string, nouvellesHospitalisations: string, 
		nouvellesPremieresInjections: string, nouvellesReanimations: string, prisesRendezVousSemaineRang1: string, prisesRendezVousSemaineRang2: string, r0: string, reanimation: string,
		stockEhpadNombreDosesPfizer: string, stockNombreDosesModerna: string, stockNombreDosesPfizer: string, stockNombreTotalDoses: string, testsPositifs: string, testsRealises: string, 
		totalPrisesRendezVousSemaine: string) {
	    this.casConfirmes = casConfirmes;
		this.casConfirmesEhpad = casConfirmesEhpad;
		this.casPossiblesEhpad = casPossiblesEhpad;
		this.cumulPremieresInjections = cumulPremieresInjections;
		this.date = date;
		this.deces = deces;
		this.decesEhpad = decesEhpad; 
		this.gueris = gueris;
		this.hospitalises = hospitalises;
		this.livraisonsCumulNombreDosesModerna = livraisonsCumulNombreDosesModerna; 
		this.livraisonsCumulNombreDosesPfizer = livraisonsCumulNombreDosesPfizer; 
		this.livraisonsCumulNombreTotalDoses = livraisonsCumulNombreTotalDoses; 
		this.nouvellesHospitalisations = nouvellesHospitalisations;
		this.nouvellesPremieresInjections = nouvellesPremieresInjections; 
		this.nouvellesReanimations = nouvellesReanimations;
		this.prisesRendezVousSemaineRang1 = prisesRendezVousSemaineRang1; 
		this.prisesRendezVousSemaineRang2 = prisesRendezVousSemaineRang2; 
		this.r0 = r0;
		this.reanimation = reanimation; 
		this.stockEhpadNombreDosesPfizer = stockEhpadNombreDosesPfizer; 
		this.stockNombreDosesModerna = stockNombreDosesModerna; 
		this.stockNombreDosesPfizer = stockNombreDosesPfizer; 
		this.stockNombreTotalDoses = stockNombreTotalDoses; 
		this.testsPositifs = testsPositifs; 
		this.testsRealises = testsRealises;
		this.totalPrisesRendezVousSemaine = totalPrisesRendezVousSemaine;
  	}
  	*/
}
