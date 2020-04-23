import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundService {

  isPlaying : boolean;

  constructor() { let isPlaying = false; }

  playAudio(){
    if(!this.isPlaying){
      let audio;
      audio = new Audio();
      audio.src = 'assets/sound/2humusic.mp3';
      audio.load();
      audio.play();
      this.isPlaying = true;
    }
  }
}
