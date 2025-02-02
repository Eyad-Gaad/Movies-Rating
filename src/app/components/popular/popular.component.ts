import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { MoviesApiService } from '../../services/movies-api.service';
import { Subscription } from 'rxjs';
import { Movie } from '../../interfaces/movie';

@Component({
  selector: 'app-popular',
  imports: [CardComponent],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.css'
})
export class PopularComponent implements OnInit , OnDestroy{
    endPoint:string='popular';
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
