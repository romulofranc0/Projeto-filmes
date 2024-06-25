import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/Movie';
import { OmdbResponse } from '../models/OmdbResponse';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private baseUrl = 'http://localhost:4200';

  constructor(private http: HttpClient) { }

  getAllMovies(title: string): Observable<OmdbResponse[]> {
    return this.http.get<OmdbResponse[]>(`${this.baseUrl}/allmovies?title=${title}`);
  }

  getMovie(id: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.baseUrl}/movie?id=${id}`);
  }
}
