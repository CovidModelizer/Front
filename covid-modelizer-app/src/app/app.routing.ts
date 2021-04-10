import { Routes } from '@angular/router';
import { EligibiliteVaccinComponent } from './eligibilite-vaccin/eligibilite-vaccin.component';

import { FullComponent } from './layouts/full/full.component';
import { ModelisationsComponent } from './modelisations/modelisations/modelisations.component';
import { InfectionsComponent } from './modelisations/infections/infections.component';
import { VaccinationsComponent } from './modelisations/vaccinations/vaccinations.component';

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
        path: 'vaccinations',
        component: VaccinationsComponent
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
