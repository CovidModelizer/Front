import { Component, OnInit } from '@angular/core';

export class Contributeur {
  nom = '';
  prenom = '';
  poste_projet = '';
  parcours_univ_actuel = '';
  poste_pro = '';
  specialisations = '';
  lien_github = '';
  lien_linkedin = '';
  lien_photo = 'assets/images/';

  constructor(nom: string, prenom: string, poste_projet: string, poste_pro: string, spe: string, lien_github: string, lien_linkedin: string, lien_photo: string) {
    this.nom = nom;
    this.prenom = prenom;
    this.poste_projet = poste_projet;
    this.parcours_univ_actuel = 'M1 MIAGE App Paris 1';
    this.poste_pro = poste_pro;
    this.specialisations = spe;
    this.lien_github = lien_github;
    this.lien_linkedin = lien_linkedin;
    this.lien_photo += lien_photo;
  }
}

@Component({
  selector: 'app-contributeurs',
  templateUrl: './contributeurs.component.html',
  styleUrls: ['./contributeurs.component.css']
})
export class ContributeursComponent implements OnInit {

  public contrib1: Contributeur;
  public contrib2: Contributeur;
  public contrib3: Contributeur;
  public contrib4: Contributeur;
  public contributeurs: Contributeur[];

  constructor() { 
    this.contrib1 = new Contributeur('Benamara', 'Abdel', 'Datascientist & Developpeur FullStack', 
    'Apprenti Innovation Analyst chez BNP Paribas', 'Certification Stanford Machine Learning',
    'https://github.com/Abdel-Benamara', 'https://linkedin.com/in/abdel-benamara', 'Abdel.jpeg');
    this.contrib2 = new Contributeur('Ekchajzer', 'David', 'Infogérant & Developpeur FullStack',
    'Apprenti chargé de projet à OMC', 'Spécialisation Numérique Responsable',
    'https://github.com/da-ekchajzer', 'https://www.linkedin.com/in/david-ekchajzer/', 'David.PNG');
    this.contrib3 = new Contributeur('Ridet', 'Mathieu', 'Chargé de projet front & Developpeur FullStack', 
    'Apprenti Développeur FullStack chez Covea', 'Spécialisation Spring Batch/Spring Boot - Angular',
    'https://github.com/mathieuridet', 'https://www.linkedin.com/in/mathieu-ridet/', 'Mathieu.jpeg');
    this.contrib4 = new Contributeur('Yalap', 'Sophia', 'Datascientist & Developpeuse FullStack', 
    'Apprentie Cheffe de projet Data & Intelligence Artificielle chez Saint-Gobain', 'Certification Stanford Machine Learning',
    'https://github.com/sophiayalap', 'https://www.linkedin.com/in/sophia-yalap/', 'Sophia.jpeg');
    this.contributeurs = [this.contrib1, this.contrib2, this.contrib3, this.contrib4];
  }

  ngOnInit(): void {
  }

}
