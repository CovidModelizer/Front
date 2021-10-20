import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent implements OnInit {

  @Output() parentFunction: EventEmitter<any> = new EventEmitter();
  modelLabel = '';
  @Input() titrePage = '';

  pathModelisations = '';

  constructor() {
  }

  setLabelModel(newLabel: string): void {
    this.modelLabel = newLabel;
  }

  ngOnInit(): void {
    this.pathModelisations = window.location.pathname.split('/')[1];
    const model = window.location.search.split('=')[1];
    this.updateModelLabel(model);
  }

  updateModelLabel(location: string): void {
    switch (location) {
      case undefined: {
        this.setLabelModel('Modèle ML Multivariée');
        break;
      }
      case 'uni': {
        this.setLabelModel('Modèle ML Univariée');
        break;
      }
      case 'sir': {
        this.setLabelModel('Modèle SIR');
        break;
      }
      case 'svir': {
        this.setLabelModel('Modèle SVIR');
        break;
      }
      case 'mul': {
        this.setLabelModel('Modèle ML Multivariée');
        break;
      }
      default: {
        this.setLabelModel('Modèle ML Multivariée');
        break;
      }
    }
  }
}
