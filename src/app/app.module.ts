import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchHomeComponent } from './components/search-home/search-home.component';
import { HttpClientModule } from '@angular/common/http';
import { PaysComponent } from './components/pays/pays.component';
import { CommonModule } from '@angular/common';
import { VilleComponent } from './components/admin/ville/ville.component';

@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
          NavbarComponent,
          SearchHomeComponent,
          PaysComponent,
          VilleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule ,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
