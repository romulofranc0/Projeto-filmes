import { Component } from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {HttpClientModule} from "@angular/common/http";
import { OmdbService} from "../movie.service";

@Component({
  selector: 'app-busca-geral',
  standalone: true,
  imports: [
    BrowserModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    HttpClientModule,
    OmdbService
  ],
  templateUrl: './busca-geral.component.html',
  styleUrl: './busca-geral.component.css'
})
export class BuscaGeralComponent {
  searchQuery: string = '';
  movies: OmdbResponse[] = [];

  constructor(private omdbService: OmdbService) {
  }

  search() {
    if (this.searchQuery.trim()) {
      this.omdbService.getMovieData(this.searchQuery).subscribe(
        (data: { Search: OmdbResponse[]; }) => {
          this.movies = data.Search; // Adjust based on the actual structure of the response
          console.log(this.movies);
        },
        (error: any) => {
          console.error('Error searching for movies:', error);
        }
      );
    }
  }
}
