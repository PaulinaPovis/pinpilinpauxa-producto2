import { Component, OnInit } from '@angular/core';
import { SongsServices } from '../Services/songsServices';
import { Song } from '../song/song';
@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
  songs: Song[];

  constructor() {

    this.songs =[];
  }

  ngOnInit(): void {

    this.songs = new SongsServices().songsList;
  }

}
