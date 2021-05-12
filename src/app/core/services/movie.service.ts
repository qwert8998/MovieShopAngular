import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private apiservice: ApiService) { }

  //Called by Movie Details Component
  getMovieDetails(id: number) {

    this.apiservice.getOne(`${'movies/'}`, id);
 }
}
