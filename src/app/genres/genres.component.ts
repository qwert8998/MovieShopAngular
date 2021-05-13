import { Component, OnInit } from '@angular/core';
import { GenreService } from '../core/services/genre.service';
import { Genre } from '../shared/models/genre';

@Component({
  selector: 'app-genres', //others can call this component by selector
  templateUrl: './genres.component.html', //After OnInit finished, it will return templateurl to show the result
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
//When component is called, OnInit will execute 
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
