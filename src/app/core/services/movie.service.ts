import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { MovieCard } from 'src/app/shared/models/movieCard';
import { MovieDetail } from 'src/app/shared/models/movieDetail';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private apiservice: ApiService) { }

  //Called by Movie Details Component
  getMovieDetails(id: number): Observable<MovieDetail> {

    return this.apiservice.getOne(`${'movies/'}`, id);
  }

  getTopRevenueMovies(): Observable<MovieCard[]> {

    return this.apiservice.getList('movies/toprevenue');

  }

  getMoviesByGenreId(id: number): Observable<MovieCard[]>
  {
    return this.apiservice.getList(`${'Movies/genre/'}`+id);
  }
}
