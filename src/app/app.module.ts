import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongComponent } from './song/song.component';
import { SongListComponent } from './song-list/song-list.component';
import { FiltroPipe } from './song-list/pipes/filtro.pipe';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SongComponent,
    SongListComponent,
    FiltroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
