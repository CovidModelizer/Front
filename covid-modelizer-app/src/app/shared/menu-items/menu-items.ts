import {Injectable} from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  {state: '?', type: 'link', name: 'Newsletter', icon: 'question_answer'},
  {state: 'donnees-reelles', type: 'link', name: 'Dataviz', icon: 'help_outline'},
  {state: 'donnees-reelles', type: 'link', name: 'Informations générales', icon: 'info_outline'},
  {state: 'modelisations', type: 'link', name: 'Modélisations', icon: 'help_outline'},
  {state: '?', type: 'link', name: 'Se faire vacciner', icon: 'help_outline'},
  {state: '?', type: 'link', name: 'Tests d\'égibilité', icon: 'edit'},
  {state: '?', type: 'link', name: 'Liens utiles', icon: 'link'},
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
