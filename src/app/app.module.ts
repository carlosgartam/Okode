import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PelisComponent } from './components/pelis/pelis.component';
import { CardPeliComponent } from './components/card-peli/card-peli.component';
import { InfoPeliComponent } from './components/info-peli/info-peli.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    PelisComponent,
    CardPeliComponent,
    InfoPeliComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'pelis', component: PelisComponent},
      {path: 'info-peli/:id', component: InfoPeliComponent},
      
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
