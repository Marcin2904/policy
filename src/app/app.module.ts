import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MainService } from './main.service';
import { ViewComponent } from './main-view/view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { PropertyComponent } from './property/property.component';
import { PropertyInfoComponent } from './property-info/property-info.component';
import { AdressComponent } from './adress/adress.component';
import { SecurityComponent } from './security/security.component';
import { BusinessComponent } from './business/business.component';
import { InsurerComponent } from './insurer/insurer.component';

import { CorrespondenceAddressComponent } from './correspondence-address/correspondence-address.component';
import { ContainerComponent } from './container/container.component';
import { PersonComponent } from './person/person.component';
import { ExampleadressComponent } from './exampleadress/exampleadress.component';






@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    PropertyComponent,
    PropertyInfoComponent,
    AdressComponent,
    SecurityComponent,
    BusinessComponent,
    InsurerComponent,
    
    CorrespondenceAddressComponent,
    
    ContainerComponent,
    
    PersonComponent,
    
    ExampleadressComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCheckboxModule
    
  ],


  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
