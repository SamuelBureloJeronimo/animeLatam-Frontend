import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AnimeModel } from 'src/app/models/anime.model';
import { GenreModel } from 'src/app/models/genre.model';

export interface PeriodicElement {
  chapter: number;
  name: string;
  serve: string;
  link: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {chapter: 1, name: 'Una noche de nieve', serve: "Mega", link: 'https://oko.sh/2VA7S'},
  {chapter: 2, name: 'El hombre del sombrero', serve: "Mega", link: 'He'},
  {chapter: 3, name: 'Una mirada fria como la nieve', serve: "Mega", link: 'Li'},
  {chapter: 4, name: 'El camino a un mejor futuro', serve: "Mega", link: 'Be'},
  {chapter: 5, name: 'Boron!!!', serve: "Mega", link: 'B'},
  {chapter: 6, name: 'La cruda realidad', serve: "Mega", link: 'C'}
];

@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.css']
})
export class AnimeDetailsComponent implements OnInit {
    public anime: AnimeModel;
    displayedColumns: string[] = ['chapter', 'name', 'serve', 'link'];
    dataSource = ELEMENT_DATA;
    constructor(private paramRouter: ActivatedRoute, private router: Router){
      this.anime = new AnimeModel();
    }
    async ngOnInit() {
      // --- --- --- ---
      this.paramRouter.paramMap.subscribe(
        (params) => {
          // -- -- I get anime Id
          const idAnime = params.get('idAnime');
          if (idAnime == null) {
            console.log("Debes proporcionar el ID del anime");
            this.router.navigate(['/home']);
            return;
          }
          // -- -- Search for anime by id
          /*  Sketch of anime wanted   */
          this.anime._id = idAnime;
          this.anime.name = "Demon Slayer: Arco de la villa de los Herreros";
          this.anime.rating = 4.5;
          this.anime.coverImage = "../../../../assets/anime_3.jpg";
          this.anime.displayImage = "../../../../assets/anime_3_displayImage.jpg";
          this.anime.launchDate = "06 de Agosto 2014";
          this.anime.sinopsis = "Estamos en la era Taisho de Japón. Tanjiro, un joven que se gana la vida vendiendo carbón, descubre un día que su familia ha sido asesinada por un demonio. Para empeorar las cosas, su hermana menor Nezuko, la única superviviente de la masacre, ha sufrido una transformación en demonio.";
          this.anime.languages = "Español | Ingles | Japones";
          this.anime.subtitles = "Español | Ingles";
          this.anime.chapters = "26/26";
          this.anime.linksToChapters = [];
          this.anime.genres = [];
          
          let genre = new GenreModel();
          genre.name = "Shounen";
          this.anime.genres.push(genre);

          let genre2 = new GenreModel();
          genre2.name = "Demons";
          this.anime.genres.push(genre2);

          this.anime.comments = [];
        },
        (error) => {
          console.log("Hubo un error al leer el parametro", error);
          this.router.navigate(["/home"]);
        }
      );
      // --- --- --- ---
    }
}