import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/body/index/index.component';
import { AnimeDetailsComponent } from './components/body/anime-details/anime-details.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MovieComponent } from './components/body/movie/movie.component';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { MaterialModule } from './material.module';
import { LoginComponent } from './components/body/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AnimeDetailsComponent,
    HeaderComponent,
    FooterComponent,
    MovieComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
