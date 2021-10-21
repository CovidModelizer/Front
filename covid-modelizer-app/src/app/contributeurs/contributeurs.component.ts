import {Component, OnInit} from '@angular/core';

export class Contributeur {
  nom = '';
  prenom = '';
  posteProjet = '';
  postePro = '';
  specialisations = '';
  lienGithub = '';
  lienLinkedin = '';
  lienPhoto = 'assets/images/';

  constructor(nom: string, prenom: string, posteProjet: string, postePro: string, spe: string,
              lienGithub: string, lienLinkedin: string, lienPhoto: string) {
    this.nom = nom;
    this.prenom = prenom;
    this.posteProjet = posteProjet;
    this.postePro = postePro;
    this.specialisations = spe;
    this.lienGithub = lienGithub;
    this.lienLinkedin = lienLinkedin;
    this.lienPhoto += lienPhoto;
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
    this.contrib1 = new Contributeur('Benamara', 'Abdel', 'Data Scientist & Développeur FullStack',
      'Apprenti Innovation Analyst chez BNP Paribas', 'Certification Stanford Machine Learning',
      'https://github.com/abdelbenamara', 'https://linkedin.com/in/abdelbenamara/', 'Abdel.jpeg');
    this.contrib2 = new Contributeur('Ekchajzer', 'David', 'Chargé de projet DevOps & Développeur FullStack',
      'Apprenti chargé de projet à OMC', 'Spécialisation Numérique Responsable',
      'https://github.com/da-ekchajzer', 'https://www.linkedin.com/in/david-ekchajzer/', 'David.PNG');
    this.contrib3 = new Contributeur('Ridet', 'Mathieu', 'Chargé de projet Front & Développeur FullStack',
      'Apprenti Développeur FullStack chez Covea', 'Spécialisation Spring Batch/Spring Boot - Angular',
      'https://github.com/mathieuridet', 'https://www.linkedin.com/in/mathieu-ridet/', 'Mathieu.jpeg');
    this.contrib4 = new Contributeur('Yalap', 'Sophia', 'Data Scientist & Développeuse FullStack',
      'Apprentie Cheffe de projet Data & Intelligence Artificielle chez Saint-Gobain', 'Certification Stanford Machine Learning',
      'https://github.com/sophiayalap', 'https://www.linkedin.com/in/sophia-yalap/', 'Sophia.jpeg');
    this.contributeurs = [this.contrib1, this.contrib2, this.contrib3, this.contrib4];
  }

  ngOnInit(): void {
  }

}
