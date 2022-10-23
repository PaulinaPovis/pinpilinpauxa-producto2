import { Component, OnInit } from '@angular/core';
import { SongsServices } from '../Services/songsServices';
import { Song } from '../song/song';
@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
  //se declara la variable songs que es de tipo array de Song (Song[])
  songs: Song[];

  textSong: string = '';

  artists:string[];

  generes:string[];

  artistSelected :string = '';

  genereSelected :string = '';

  songSelected : Song;

  constructor() {

    this.songs =[];
    this.artists=[];
    this.generes=[];
    this.songSelected = new Song();
  }

  ngOnInit(): void {

    this.songs = new SongsServices().songsList;
    this.songs.forEach(s => {
      this.artists.push(s.artist);
      this.generes.push(s.genres.toString());
    });

    this.artists = Array.from(new Set(this.artists));
    this.generes = Array.from(new Set(this.generes));

  }

  setSong(song:Song){

    this.songSelected = song;
  }

}
