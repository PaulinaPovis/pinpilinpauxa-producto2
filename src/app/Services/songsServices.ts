import { inject } from "@angular/core/testing";
import { Song } from "../song/song";

/**
 * Clase que está simulando el servicio de una lista de canciones
 */

export class SongsServices{
  songsList : Song[] =
  [
    {
      id: 1,
      title: 'Thriller',
      artist: 'Michael Jackson',
      year: 1980,
      album: 'Thriller',
      genres: ['Disco', 'Pop', 'Funk'],
      producer: 'Quincy Jones',
      songwriter: 'Rod Temperton',
      duration:'5:58'
    },
    {
      id: 2,
      title: 'Rolling in the Deep',
      artist: 'Adele',
      year: 2011,
      album: '21',
      genres: ['Rhythm and blues', 'Soul'],
      producer: 'Paul Epworth',
      songwriter: 'Adele Adkins',
      duration:'3:49'
    },
    {
      id: 3,
      title: 'Blinding Lights',
      artist: 'The Weeknd',
      year: 2019,
      album: 'Blinding Lights',
      genres: ['Rhythm and blues', 'Soul', 'Synthwave'],
      producer: 'Max Martin',
      songwriter: 'Abel Tesfaye',
      duration:'3:22'
    },
    {
      id: 4,
      title: 'I Disagree',
      artist: 'Poppy',
      year: 2020,
      album: 'I Disagree',
      genres: ['Kawaii Metal'],
      producer: 'Chirs Greatti',
      songwriter: 'Zakk Cervini',
      duration: '3:21'
    },
    {
      id: 5,
      title: 'I Want Out',
      artist: 'Helloween',
      year: 1988,
      album: 'Keeper of the',
      genres: ['Pop-Rock'],
      producer:  'Noise International',
      songwriter: 'Kai Hansen',
      duration: '4:41'
    },
    {
      id: 6,
      title: 'So Long',
      artist: 'Abba',
      year: 1975,
      album: 'Abba',
      genres: ['Pop-Rock'],
      producer: 'Bjorn Ulvaeus',
      songwriter: 'Benny Andersson',
      duration: '3:09'
    },
    {
      id: 7,
      title: 'Somebody to love',
      artist: 'Queen',
      year: 1976,
      album: 'A Day at the',
      genres: ['Pop-Rock'],
      producer: 'Queen',
      songwriter: 'Freddie Mercury',
      duration: '4:56'
    },
    {
      id: 8,
      title: 'Poison',
      artist: 'Alice Cooper',
      year: 1989,
      album: 'Trash',
      genres: ['Hard Rock'],
      producer: 'Straight',
      songwriter: 'Poison',
      duration: '4:28'
    },
    {
      id: 9,
      title: 'Hamaika Holako',
      artist: 'Alaitz eta Maider',
      year: 1999,
      album: 'Inshala',
      genres: ['Trikitixa'],
      producer: 'Max Martin',
      songwriter: 'Abel Tesfaye',
      duration: '4:00'
    },

    {
      id: 10,
      title: 'Blinding Lights',
      artist: 'The Weeknd',
      year: 2019,
      album: 'Blinding Lights',
      genres: ['Rhythm and blues', 'Soul', 'Synthwave'],
      producer: 'XO',
      songwriter: 'Abel Tesfaye',
      duration: '3:22'
    }



  ]

  constructor(){}

}
