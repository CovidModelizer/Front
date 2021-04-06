import 'hammerjs';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {CdkTableModule} from '@angular/cdk/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ModelisationsComponent} from './modelisations/modelisations.component';
import {ModeleLineaireComponent} from './modele-lineaire/modele-lineaire.component';
import {ModeleSirComponent} from './modele-sir/modele-sir.component';
import {ModeleSvirComponent} from './modele-svir/modele-svir.component';
import {ModeleMachineLearningComponent} from './modele-machine-learning/modele-machine-learning.component';
import {ChartsModule} from 'ng2-charts';
import {ModelisationsRoute} from './modelisations-routing.module';
import {MaterialModule} from "../material.module";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild(ModelisationsRoute),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule,
    ChartsModule,
    MaterialModule
  ],
  providers: [],
  declarations: [
    ModelisationsComponent,
    ModeleLineaireComponent,
    ModeleSirComponent,
    ModeleSvirComponent,
    ModeleMachineLearningComponent
  ]
})
export class ModelisationsModule {
}
