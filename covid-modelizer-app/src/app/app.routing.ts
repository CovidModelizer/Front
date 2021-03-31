import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import {ModelisationsComponent} from './modelisations/modelisations/modelisations.component';
import {SituationReelleComponent} from './situation-reelle/situation-reelle/situation-reelle.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/situation-reelle',
        pathMatch: 'full'
      },
      {
        path: 'modelisations',
        component: ModelisationsComponent
      },
      {
        path: 'situation-reelle',
        component: SituationReelleComponent
      }
    ]
  }
];
