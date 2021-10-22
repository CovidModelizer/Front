import {Routes} from '@angular/router';
import {FullComponent} from './layouts/full/full.component';
import {ModelisationsComponent} from './modelisations/modelisations/modelisations.component';
import {InfectionsComponent} from './modelisations/infections/infections.component';
import {VaccinationsComponent} from './modelisations/vaccinations/vaccinations.component';
import {ContributeursComponent} from './contributeurs/contributeurs.component';
import {ApiDocumentationComponent} from './api-documentation/api-documentation.component';
import {SeFaireVaccinerComponent} from './se-faire-vacciner/se-faire-vacciner.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/informations-generales',
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
        path: 'informations-generales',
        loadChildren: () => import('./donnees-reelles/donnees-reelles.module').then(m => m.DonneesReellesModule)
      },
      {
        path: 'se-faire-vacciner',
        component: SeFaireVaccinerComponent
      },
      {
        path: 'contributeurs',
        component: ContributeursComponent
      },
      {
        path: 'api-documentation',
        component: ApiDocumentationComponent
      }
    ]
  }
];
