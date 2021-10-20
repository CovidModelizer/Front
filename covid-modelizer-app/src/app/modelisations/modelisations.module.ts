import 'hammerjs';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {CdkTableModule} from '@angular/cdk/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ModelisationsComponent} from './modelisations/modelisations.component';
import {UnivariateModelComponent} from './machinelearning/univariate/univariate-model.component';
import {SirModelComponent} from './biologic/sir/sir-model.component';
import {SvirModelComponent} from './biologic/svir/svir-model.component';
import {MultivariateModelComponent} from './machinelearning/multivariate/multivariate-model.component';
import {ChartsModule} from 'ng2-charts';
import {MaterialModule} from '../material.module';
import {InfectionsComponent} from './infections/infections.component';
import {VaccinationsComponent} from './vaccinations/vaccinations.component';

@NgModule({
  imports: [
    BrowserModule,
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
    UnivariateModelComponent,
    SirModelComponent,
    SvirModelComponent,
    MultivariateModelComponent,
    VaccinationsComponent,
    InfectionsComponent
  ]
})
export class ModelisationsModule {
}
