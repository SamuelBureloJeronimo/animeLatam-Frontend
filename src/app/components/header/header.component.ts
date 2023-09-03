import { Component,OnInit } from '@angular/core';
import { LoginComponent } from '../body/login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public MyAnime:Array<any> = [];
  public filterOptions!:Observable<any[]>;
  public formActivate = new FormControl('');

  constructor(private matDialog:MatDialog){
   
  }

  ngOnInit(): void {
    this.MyAnime = [
      {
        id:1,
        title:'Naruto',
        content:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
        image:'ficticia.jpg'
      },
      {
        id:2,
        title:'Dragon Ball Super',
        content:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
        image:'ficticia.jpg'
      },
      {
        id:3,
        title:'One Piece',
        content:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
        image:'ficticia.jpg'
      },
      {
        id:4,
        title:'Los siete pecados capitales',
        content:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
        image:'ficticia.jpg'
      },
    ];

    console.log(this.MyAnime)
  }

  public openDialog():void{
    this.matDialog.open(LoginComponent,{
        width:'400px',
        height:'370px'
    });
  }

  

}
