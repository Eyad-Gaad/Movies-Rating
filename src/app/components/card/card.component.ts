import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movie';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
imgPath:string = 'https://image.tmdb.org/t/p/w500'
@Input()  movie!:Movie;
date!:Date
ngOnInit(): void {
  this.date= new Date(this.movie.release_date);
}
}
