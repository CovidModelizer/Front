import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SituationReelleRoutes, SituationReelleRoutingModule} from './situation-reelle-routing.module';
import { SituationReelleComponent } from './situation-reelle/situation-reelle.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ChartistModule} from 'ng-chartist';
import {RouterModule} from '@angular/router';
import {ChartsModule} from 'ng2-charts';
import {MatCardModule} from '@angular/material/card';
import {ActualDataComponent} from './actual-data/actual-data.component';
import {ActualGraphComponent} from './actual-graph/actual-graph.component';


@NgModule({
  declarations: [SituationReelleComponent, ActualDataComponent, ActualGraphComponent],
  imports: [
    CommonModule,
    SituationReelleRoutingModule,
    FlexLayoutModule,
    ChartistModule,
    RouterModule.forChild(SituationReelleRoutes),
    ChartsModule,
    MatCardModule
  ]
})
export class SituationReelleModule { }
