import {Injectable} from '@angular/core';

const MENUITEMS = [
  {state: 'donnees-reelles', type: 'intern_link', name: 'Informations générales', icon: "assets/images/information.png"},
  {state: 'modelisations', type: 'intern_link', name: 'Modélisations', icon: 'assets/images/graph.png', 
    subItems:[
      {state: 'infections', type: 'intern_link', name: 'Infections', icon: 'assets/images/cross.png'}, 
      {state: 'vaccinations', type: 'intern_link', name: 'Vaccinations', icon: 'assets/images/injection.png'},
    ]},
  {state: 'eligibilite-vaccin', type: 'intern_link', name: 'Se faire vacciner', icon: 'assets/images/injection.png'},
  {state: 'api-documentation', type: 'intern_link', name: 'API', icon: 'assets/images/api.png'},
  {state: 'contributeurs', type: 'intern_link', name: 'Contributeurs', icon: 'assets/images/group.png'},
];

@Injectable()
export class MenuItems {
  getMenuitem(): any[] {
    return MENUITEMS;
  }
}
