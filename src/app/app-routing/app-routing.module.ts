import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from '../components/body/index/index.component';
import { AnimeDetailsComponent } from '../components/body/anime-details/anime-details.component';
import { MovieComponent } from '../components/body/movie/movie.component';
import { LoginComponent } from '../components/body/login/login.component';
  

const routes: Routes = [
  { path: 'home', component: IndexComponent },
  { path: 'anime-details/:idAnime', component: AnimeDetailsComponent },
  { path:'Movies',component:MovieComponent },
  { path: 'Login', component:LoginComponent },
  { path: '**', component: IndexComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }