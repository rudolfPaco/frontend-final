import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {MatButtonToggleModule} from '@angular/material/typings/esm5/button-toggle';
import {MatCheckboxModule} from '@angular/material/typings/esm5/checkbox';
import {MatDatepickerModule} from '@angular/material/typings/esm5/datepicker';
import {MatExpansionModule} from '@angular/material/typings/esm5/expansion';
import {MatGridListModule} from '@angular/material/typings/esm5/grid-list';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatSnackBarModule} from '@angular/material/typings/esm5/snack-bar';
import {MatSlideToggleModule} from '@angular/material/typings/esm5/slide-toggle';
import {MatProgressSpinnerModule} from '@angular/material/typings/esm5/progress-spinner';
import {MatProgressBarModule} from '@angular/material/typings/esm5/progress-bar';
import {MatPaginatorModule} from '@angular/material/typings/esm5/paginator';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
    MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule,
    MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule,
    MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule,
    MatTabsModule, MatToolbarModule, MatTooltipModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
