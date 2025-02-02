import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { MoviesApiService } from '../../services/movies-api.service';
import { Subscription } from 'rxjs';
import { Movie } from '../../interfaces/movie';

@Component({
  selector: 'app-now-playing',
  imports: [CardComponent],
  templateUrl: './now-playing.component.html',
  styleUrl: './now-playing.component.css'
})
export class NowPlayingComponent implements OnInit , OnDestroy{
  endPoint:string='now_playing';
  moviesApiService:MoviesApiService  = inject(MoviesApiService);
  subscription!:Subscription;
  movies!:Movie[];
  getMovies(){
    this.subscription = this.moviesApiService.getData(this.endPoint).subscribe({
      next:(res)=>{
        this.movies = res.results;
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }
  ngOnInit(): void {
    this.getMovies();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
