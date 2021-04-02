import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent implements OnInit {

  @Output('parentFunction') parentFunction: EventEmitter<any> = new EventEmitter();
  labelModel = 'Modèle Linéaire';
  @Input() titrePage = '';

  // tslint:disable-next-line:variable-name
  path_modelisations = 'modelisations';

  setLabelModel(newLabel: string): void {
    this.labelModel = newLabel;
  }

  ngOnInit(): void {
  }

}
