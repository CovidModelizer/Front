import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {AppRoutes} from './app.routing';
import {AppComponent} from './app.component';
import {FullComponent} from './layouts/full/full.component';
import {AppHeaderComponent} from './layouts/full/header/header.component';
import {AppSidebarComponent} from './layouts/full/sidebar/sidebar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {SharedModule} from './shared/shared.module';
import {SpinnerComponent} from './shared/spinner.component';
import {MaterialModule} from './material.module';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import { EligibiliteVaccinComponent } from './eligibilite-vaccin/eligibilite-vaccin.component';
import { DonneesReellesComponent } from './donnees-reelles/donnees-reelles/donnees-reelles.component';
import { ModelisationsComponent } from './modelisations/modelisations/modelisations.component';
import { ActualDataComponent } from './donnees-reelles/actual-data/actual-data.component';
import { ActualGraphComponent } from './donnees-reelles/actual-graph/actual-graph.component';
import { ModeleLineaireComponent } from './modelisations/modele-lineaire/modele-lineaire.component';
import { ModeleSirComponent } from './modelisations/modele-sir/modele-sir.component';
import { ModeleSvirComponent } from './modelisations/modele-svir/modele-svir.component';
import { ModeleMachineLearningComponent } from './modelisations/modele-machine-learning/modele-machine-learning.component';
import { DonneesReellesModule } from './donnees-reelles/donnees-reelles.module';
import { ModelisationsModule } from './modelisations/modelisations.module';
import { EventEmitterService } from './shared/event-emitter.service';
import { ContributeursComponent } from './contributeurs/contributeurs.component';
import { ApiDocumentationComponent } from './api-documentation/api-documentation.component';


@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    AppSidebarComponent,
    EligibiliteVaccinComponent,
    ContributeursComponent,
    ApiDocumentationComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    EventEmitterService,
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
