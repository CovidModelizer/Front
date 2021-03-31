import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent {

  // tslint:disable-next-line:variable-name
  path_modelisations = 'modelisations';
  // tslint:disable-next-line:variable-name
  path_situation_reelle = 'situation-reelle';

}
