import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { MoviesApiService } from '../../services/movies-api.service';
import { Subscription } from 'rxjs';
import { Movie } from '../../interfaces/movie';

@Component({
  selector: 'app-up-coming',
  imports: [CardComponent],
  templateUrl: './up-coming.component.html',
  styleUrl: './up-coming.component.css'
})
export class UpComingComponent implements OnInit , OnDestroy{
        endPoint:string='upcoming';
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
