import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ItemDetailComponent} from './item-detail/item-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {baseURL} from './shared/baseurl';
import {HeaderComponent} from './header/header.component';
import {InicioComponent} from './inicio/inicio.component';
import {EquiposComponent} from './equipos/equipos.component';
import {DotacionesComponent} from './dotaciones/dotaciones.component';
import {EmpleadosComponent} from './empleados/empleados.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {AboutComponent} from './about/about.component';
import {FormularioEquipoComponent} from './formulario-equipo/formulario-equipo.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormularioAccidentesComponent} from './formulario-accidentes/formulario-accidentes.component';
import {AccidentesComponent} from './accidentes/accidentes.component';
import {FormularioDotacionesComponent} from './formulario-dotaciones/formulario-dotaciones.component';
import {FormularioAsignacionComponent} from './formulario-asignacion/formulario-asignacion.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemDetailComponent,
    HeaderComponent,
    InicioComponent,
    EquiposComponent,
    DotacionesComponent,
    EmpleadosComponent,
    AboutComponent,
    FormularioEquipoComponent,
    FormularioAccidentesComponent,
    AccidentesComponent,
    FormularioDotacionesComponent,
    FormularioAsignacionComponent

  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
    MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule,
    MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule,
    MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule,
    MatTabsModule, MatToolbarModule, MatTooltipModule,
    FlexLayoutModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule

  ],
  providers: [{provide: 'BaseURL', useValue: baseURL}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
