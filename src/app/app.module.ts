import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule, RoutingComponents } from './app-routing.module'
import { EncapsulationComponent } from './encapsulation/encapsulation.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

/*import { Routes, RouterModule } from '@angular/router';*/


import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from "@progress/kendo-angular-inputs";
import { LabelModule } from "@progress/kendo-angular-label";
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { IconsModule } from "@progress/kendo-angular-icons";
import { NotificationModule } from '@progress/kendo-angular-notification';


import { MatButtonModule } from '@angular/material/button';




@NgModule({
  declarations: [
    AppComponent,
    EncapsulationComponent,
    RoutingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbTooltipModule,
    NgbPopoverModule,
    NgbCollapseModule,
    NoopAnimationsModule,
    GridModule,
    BrowserAnimationsModule,
    FormsModule,
    InputsModule,
    LabelModule,
    DropDownsModule,
    ButtonsModule,
    ReactiveFormsModule,
    IconsModule,
    NotificationModule,
    MatButtonModule,
    HttpClientModule,

/*    RouterModule.forRoot(appRoutes),*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
