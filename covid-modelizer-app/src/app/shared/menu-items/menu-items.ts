import {Injectable} from '@angular/core';

export interface Menu {
  state: string;
  params: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  {state: 'donnees-reelles', params: '', type: 'link', name: 'Informations générales', icon: "assets/images/information.png"},
  {state: 'modelisations', params: 'lin', type: 'link', name: 'Modélisations', icon: 'assets/images/graph.png'},
  {state: '?', params: '', type: 'link', name: 'Infections', icon: 'assets/images/cross.png'},
  {state: '?', params: '', type: 'link', name: 'Vaccin', icon: 'assets/images/injection.png'},
  {state: 'eligibilite-vaccin', params: '', type: 'link', name: 'Se faire vacciner', icon: 'assets/images/injection.png'},
  {state: '?', params: '', type: 'link', name: 'API', icon: 'assets/images/api.png'},
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
