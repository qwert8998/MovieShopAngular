import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/core/services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDetail } from 'src/app/shared/models/movieDetail'

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movieId: number | undefined;
  detail!: MovieDetail;

  constructor(private movieService: MovieService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.movieId = params.get('id') ? Number(params.get('id')) : 0;
        console.log(this.movieId);
        this.movieService.getMovieDetails(this.movieId).subscribe(m => {
          this.detail = m;
          console.log(m);
        });
      }
    );
  }

}
