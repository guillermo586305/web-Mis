import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: 'login', loadComponent: () => import('./app/components/login/login.component').then(m => m.LoginComponent) },
      { path: '**', redirectTo: 'login' }, // Ruta por defecto
    ]),
  ],
}).catch(err => console.error(err));
