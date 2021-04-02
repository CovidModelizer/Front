import {Routes} from '@angular/router';

import {FullComponent} from './layouts/full/full.component';
import {ModelisationsComponent} from './modelisations/modelisations/modelisations.component';

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
        path: 'donnees-reelles',
        loadChildren: () => import('./donnees-reelles/donnees-reelles.module').then(m => m.DonneesReellesModule)
      }
    ]
  }
];
