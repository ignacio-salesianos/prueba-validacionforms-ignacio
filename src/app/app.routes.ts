import { Routes } from '@angular/router';
import { PetFormPage } from './pages/pet-form-page/pet-form-page';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: PetFormPage },
];