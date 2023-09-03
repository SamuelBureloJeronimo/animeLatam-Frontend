import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private title:string;
  private text:string;

  constructor(private matDialog:MatDialog){
    this.title = 'Login';
    this.text = 'Inicia sesion para continuar';
  }

  public getTitle():string{
    return this.title;
  }

  public getText():string{
    return this.text;
  }

  public onClose():void{
    this.matDialog.closeAll();
  }


}
