import { Routes } from '@angular/router';
import {BuscaGeralComponent} from "./Components/busca-geral/busca-geral.component";



export const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: 'search'},
  {path: 'search', component: BuscaGeralComponent}
];
