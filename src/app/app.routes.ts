import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FechaComponent } from './components/fecha/fecha.component';
import { PalabraComponent } from './components/palabra/palabra.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'fecha', component: FechaComponent },
  { path: 'palabra', component: PalabraComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
