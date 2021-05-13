import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { MovieCard } from 'src/app/shared/models/movieCard';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private apiservice: ApiService) { }

  //Called by Movie Details Component
  getMovieDetails(id: number) {

    this.apiservice.getOne(`${'movies/'}`, id);
 }

 getTopRevenueMovies(): Observable<MovieCard[]> {

  return this.apiservice.getList('movies/toprevenue');

}
}
