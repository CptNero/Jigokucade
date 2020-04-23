import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data/data.service";
import {Game} from "../../models/game";
import {SoundService} from "../../services/sound/sound.service";

@Component({
  selector: 'app-game-collection',
  templateUrl: './game-collection.component.html',
  styleUrls: ['./game-collection.component.css',]
})
export class GameCollectionComponent implements OnInit {

  games: Game[];
  searchName: string;
  searchYear: string;
  searchGenre: string;

  constructor(private dataService: DataService, private soundService: SoundService) {}

  ngOnInit(): void {
    this.games = this.dataService.Games;
    this.soundService.playAudio();
  }

}
