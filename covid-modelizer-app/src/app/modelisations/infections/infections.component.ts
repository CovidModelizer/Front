import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-infections',
  templateUrl: './infections.component.html',
  styleUrls: ['./infections.component.css']
})
export class InfectionsComponent implements OnInit {

  private route: ActivatedRoute;
  public modele = 'lin'; // On tombe sur le modèle linéaire par défaut

  // tslint:disable-next-line:variable-name
  constructor(private _route: ActivatedRoute) {
    this.route = _route;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.modele = params.modele;
    });
    console.log(this.modele);
  }

}
