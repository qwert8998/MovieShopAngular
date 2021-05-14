import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieCard } from 'src/app/shared/models/movieCard';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-movie-card-list',
  templateUrl: './movie-card-list.component.html',
  styleUrls: ['./movie-card-list.component.css']
})
export class MovieCardListComponent implements OnInit {

  constructor(private movieservice: MovieService, private route: ActivatedRoute, private router: Router) { }

  genreId: number | undefined;
  movies: MovieCard[] | undefined;

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.genreId = params.get('id') ? Number(params.get('id')) : 0;
        console.log(this.genreId);
        this.movieservice.getMoviesByGenreId(this.genreId).subscribe(m => {
          this.movies = m;
          console.table(m);
        });
      }
    );
  }

}
