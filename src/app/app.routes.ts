import { Routes } from '@angular/router';
import { NowPlayingComponent } from './components/now-playing/now-playing.component';
import { PopularComponent } from './components/popular/popular.component';
import { TopRatedComponent } from './components/top-rated/top-rated.component';
import { UpComingComponent } from './components/up-coming/up-coming.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {path:'' , redirectTo:'now-playing',pathMatch:'full'},
    {path:'now-playing' , component:NowPlayingComponent,title:'now playing'},
    {path:'popular' , component:PopularComponent,title:'popular'},
    {path:'top-rated' , component:TopRatedComponent,title:'top rated'},
    {path:'up-coming' , component:UpComingComponent,title:'up coming'},
    {path:'**' , component:NotFoundComponent,title:'page not found'},
];
