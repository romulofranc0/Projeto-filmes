import { Component } from '@angular/core';
import { MovieService } from '../../Services/MovieService';
import { OmdbResponse } from '../../models/OmdbResponse';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-busca-geral',
  standalone: true,
  imports: [CommonModule, FormsModule, TableModule],
  templateUrl: './busca-geral.component.html',
  styleUrls: ['./busca-geral.component.css']
})
export class BuscaGeralComponent {
  movies: OmdbResponse[] = [];
  title: string = '';

  constructor(private movieService: MovieService) { }

  searchMovies(): void {
    this.movieService.getAllMovies(this.title).subscribe(movies => {
      this.movies = movies;
    });
  }
}
