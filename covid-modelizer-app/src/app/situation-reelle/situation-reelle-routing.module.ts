import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SituationReelleComponent} from './situation-reelle/situation-reelle.component';

export const SituationReelleRoutes: Routes = [{
  path: '',
  component: SituationReelleComponent
}];

@NgModule({
  imports: [RouterModule.forChild(SituationReelleRoutes)],
  exports: [RouterModule]
})
export class SituationReelleRoutingModule { }
