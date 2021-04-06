import {Injectable} from '@angular/core';

export interface Menu {
  state: string;
  params: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  {state: '?', params: '', type: 'link', name: 'Newsletter', icon: 'question_answer'},
  {state: 'donnees-reelles', params: '', type: 'link', name: 'Informations générales', icon: 'info_outline'},
  {state: 'modelisations', params: 'lin', type: 'link', name: 'Modélisations', icon: 'help_outline'},
  {state: '?', params: '', type: 'link', name: 'Se faire vacciner', icon: 'help_outline'},
  {state: '?', params: '', type: 'link', name: 'Tests d\'éligibilité', icon: 'edit'},
  {state: '?', params: '', type: 'link', name: 'Liens utiles', icon: 'link'},
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
