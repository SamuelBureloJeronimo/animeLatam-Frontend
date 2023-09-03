import { GenreModel } from "./genre.model";

export class AnimeModel {
    public _id: string = "";
    public name: string = "";
    public coverImage: string = "";
    public displayImage: string = "";

    public sinopsis: string = "";
    public launchDate: string = "";
    public languages: string = "";
    
    public subtitles: string = "";
    public genres: Array<GenreModel> = [];
    public rating: number = 0;

    public chapters: string = "";
    public linksToChapters: Array<any> = [];
    public comments: Array<any> = [];
}