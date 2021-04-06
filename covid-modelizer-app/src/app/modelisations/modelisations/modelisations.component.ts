import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-modelisations',
  templateUrl: './modelisations.component.html',
  styleUrls: ['./modelisations.component.css']
})
export class ModelisationsComponent implements OnInit {

  private route: ActivatedRoute;
  public modele = '';

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
