import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../demo-material-module';
import { CdkTableModule } from '@angular/cdk/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ModelisationsComponent } from './modelisations/modelisations.component';
import { ModeleLineaireComponent } from './modele-lineaire/modele-lineaire.component';
import { ModeleSirComponent } from './modele-sir/modele-sir.component';
import { ModeleSvirComponent } from './modele-svir/modele-svir.component';
import { ModeleMachineLearningComponent } from './modele-machine-learning/modele-machine-learning.component';
import {ChartsModule} from 'ng2-charts';
import {ModelisationsRoute} from './modelisations-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ModelisationsRoute),
    DemoMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule,
    ChartsModule
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
export class ModelisationsModule {}
