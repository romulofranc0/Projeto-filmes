import {Component, NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {HttpClientModule} from "@angular/common/http";
import {FloatLabelModule} from "primeng/floatlabel";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";




@Component({
  selector: 'app-busca-geral',
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule,
    ButtonModule,
    HttpClientModule,
    FloatLabelModule,
    NgIf,
    NgOptimizedImage,
    NgForOf,

  ],
  providers:[NgModule],
  templateUrl: './busca-geral.component.html',
  styleUrl: './busca-geral.component.css'
})
export class BuscaGeralComponent {
}
