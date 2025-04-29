import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent], // Declaración del AppComponent
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    RouterModule.forRoot([]), // Configura tus rutas aquí si es necesario
  ],
  bootstrap: [AppComponent], // Componente raíz
})
export class AppModule { }
