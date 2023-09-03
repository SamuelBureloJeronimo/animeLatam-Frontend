import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimeModel } from 'src/app/models/anime.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{
  public animes: Array<AnimeModel>;

  constructor(private router: Router){
    this.animes = [];
  }
  async ngOnInit() {
    let anime1 = new AnimeModel();
    anime1._id = "8945mknjoerfnioefghjrieh.12121";
    anime1.name = "Jujutsu Kaisen";
    anime1.coverImage = "../../../../assets/anime_1.jpg";
    this.animes.push(anime1);

    let anime2 = new AnimeModel();
    anime2._id = "8945mknjoerfnioefghjrieh.0897890";
    anime2.name = "Moshoku Tensei";
    anime2.coverImage = "../../../../assets/anime_2.jpg";
    this.animes.push(anime2);
    

    let anime3 = new AnimeModel();
    anime3._id = "8945mknjoerfnioefghjrieh.3455665";
    anime3.name = "Blue Exorcist";
    anime3.coverImage = "../../../../assets/anime_4.jpg";
    this.animes.push(anime3);

    let anime4 = new AnimeModel();
    anime4._id = "8945mknjoerfnioefghjrieh.9820234";
    anime4.name = "Demon Slayer: Arco del distrito rojo";
    anime4.coverImage = "../../../../assets/anime_3.jpg";
    this.animes.push(anime4);

    let anime5 = new AnimeModel();
    anime5._id = "8945mknjoerfnioefghjrieh.0091200";
    anime5.name = "Scarlet Nexus";
    anime5.coverImage = "../../../../assets/anime_5.jpg";
    this.animes.push(anime5);
  }
  clickAnime(idAnime: string){
    console.log(idAnime);
    this.router.navigate(["/anime-details/"+idAnime]);
  }
}
