import { Routes } from '@angular/router';
import { InfectionsComponent } from './infections/infections.component';
import {ModelisationsComponent} from './modelisations/modelisations.component';
import { VaccinComponent } from './vaccin/vaccin.component';

export const ModelisationsRoute: Routes = [
  {
    path: 'modelisations',
    component: ModelisationsComponent
  }
];
