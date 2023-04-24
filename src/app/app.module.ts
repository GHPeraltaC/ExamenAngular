import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoadingComponent } from './components/loading/loading.component';

import { AppRoutingModule } from './app-routing.module';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';

import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { PantallaPokemonComponent } from './pages/pantalla-pokemon/pantalla-pokemon.component';
@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    PantallaPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    HttpClientModule,
    TableModule,
    PanelModule,
    ToastModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
