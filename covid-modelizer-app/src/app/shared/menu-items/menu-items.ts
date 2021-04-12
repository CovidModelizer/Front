import {Injectable} from '@angular/core';

const MENUITEMS = [
  {state: 'informations-generales', type: 'intern_link', name: 'Informations générales', icon: "assets/images/information.png"},
  {state: 'modelisations', type: 'intern_link', name: 'Modélisations', icon: 'assets/images/graph.png', 
    subItems:[
      {state: 'infections', type: 'intern_link', name: 'Infections', icon: 'assets/images/cross.png'}, 
      {state: 'vaccinations', type: 'intern_link', name: 'Vaccinations', icon: 'assets/images/injection.png'},
    ]},
  {state: 'se-faire-vacciner', type: 'intern_link', name: 'Se faire vacciner', icon: 'assets/images/clipboard.png'},
  {state: 'api-documentation', type: 'intern_link', name: 'API documentation', icon: 'assets/images/api.png'},
  {state: 'contributeurs', type: 'intern_link', name: 'Contributeurs', icon: 'assets/images/group.png'},
];

@Injectable()
export class MenuItems {
  getMenuitem(): any[] {
    return MENUITEMS;
  }
}
