import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-infections',
  templateUrl: './infections.component.html',
  styleUrls: ['./infections.component.css']
})
export class InfectionsComponent implements OnInit {

  public modele = 'mul'; // On tombe sur le modèle de ML Multivariée par défaut
  public categorie = 'infection';
  private route: ActivatedRoute;

  constructor(private activatedRoute: ActivatedRoute) {
    this.route = activatedRoute;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.modele = params.modele;
    });
  }

}
