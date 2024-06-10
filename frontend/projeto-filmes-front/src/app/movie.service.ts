import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OmdbService {

  private baseUrl: string = 'http://localhost:8080/allmovies';

  constructor(private http: HttpClient) { }

  getMovieData(title: string): Observable<OmdbResponse>{
    return this.http.get<OmdbResponse>(`${this.baseUrl}/allmovies?q=${title}`);
  }
}
