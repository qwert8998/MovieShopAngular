import { Component, OnInit } from '@angular/core';
import { GenreService } from '../core/services/genre.service';
import { Genre } from '../shared/models/genre';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  genres : Genre[] | undefined;

  constructor(private genreservice: GenreService) { }

  ngOnInit(): void {
    console.log('Inside Genre component Init()');
    this.genreservice.getAllGenres().subscribe(
      g => {
        this.genres = g;
        console.table(this.genres);
      });
  }

}
