import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {BuscaGeralComponent} from "./Components/busca-geral/busca-geral.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BuscaGeralComponent],

  template: `
    <app-busca-geral/>
  `
})
export class AppComponent {
}
