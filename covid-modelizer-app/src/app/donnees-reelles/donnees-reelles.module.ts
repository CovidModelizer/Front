import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DonneesReellesRoutes} from './donnees-reelles-routing.module';
import {InformationsGeneralesComponent} from './informations-generales/informations-generales.component';
import {ActualDataComponent} from './actual-data/actual-data.component';
import {ActualGraphComponent} from './actual-graph/actual-graph.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ChartistModule} from 'ng-chartist';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../material.module';
import {ChartsModule} from 'ng2-charts';


@NgModule({
  declarations: [InformationsGeneralesComponent, ActualDataComponent, ActualGraphComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ChartistModule,
    RouterModule.forChild(DonneesReellesRoutes),
    ChartsModule
  ]
})
export class DonneesReellesModule {
}
