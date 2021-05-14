import { Component, OnInit } from '@angular/core';
import { GenreService } from 'src/app/core/services/genre.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-card-list',
  templateUrl: './movie-card-list.component.html',
  styleUrls: ['./movie-card-list.component.css']
})
export class MovieCardListComponent implements OnInit {

  constructor(private genreservice: GenreService, private route: ActivatedRoute, private router: Router) { }

  genreId: number | undefined;

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.genreId = params.get('id') ? Number(params.get('id')) : 0;
        console.log(this.genreId);
        // call your movie service
      }
    );
  }

}
