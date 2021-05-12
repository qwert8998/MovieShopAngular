import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Genre } from 'src/app/shared/models/genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private apiservice: ApiService) { }

  getAllGenres(): Observable<Genre[]>
  {
    return this.apiservice.getList('Genre');
  }
}
