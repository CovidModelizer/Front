import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent implements OnInit {

  @Output('parentFunction') parentFunction: EventEmitter<any> = new EventEmitter();
  labelModel = '';
  @Input() titrePage = '';

  // tslint:disable-next-line:variable-name
  path_modelisations = 'modelisations';

  setLabelModel(newLabel: string): void {
    this.labelModel = newLabel;
  }

  ngOnInit(): void {
    this.initLabelModelAtStartup(window.location.search.split('=')[1]);
  }

  initLabelModelAtStartup(location: string): void {
    switch(location) {
      case 'lin': {
        this.setLabelModel('Modèle Linéaire');
        break
      }
      case 'sir': {
        this.setLabelModel('Modèle SIR');
        break;
      }
      case 'svir': {
        this.setLabelModel('Modèle SVIR');
        break;
      }
      case 'ml': {
        this.setLabelModel('Modèle Machine Learning');
        break;
      }
      default: {
        // Impossible
        break;
      }
    }
  }

}
