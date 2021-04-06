import {Routes} from '@angular/router';
import { EligibiliteVaccinComponent } from './eligibilite-vaccin/eligibilite-vaccin.component';

import {FullComponent} from './layouts/full/full.component';
import { InfectionsComponent } from './modelisations/infections/infections.component';
import {ModelisationsComponent} from './modelisations/modelisations/modelisations.component';
import { VaccinComponent } from './modelisations/vaccin/vaccin.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/donnees-reelles',
        pathMatch: 'full'
      },
      {
        path: 'modelisations',
        component: ModelisationsComponent
      },
      {
        path: 'infections',
        component: InfectionsComponent
      },
      {
        path: 'vaccin',
        component: VaccinComponent
      },
      {
        path: 'donnees-reelles',
        loadChildren: () => import('./donnees-reelles/donnees-reelles.module').then(m => m.DonneesReellesModule)
      },
       {
        path: 'eligibilite-vaccin',
        component: EligibiliteVaccinComponent
      }
    ]
  }
];
