import { Pipe, PipeTransform } from '@angular/core';
import {Game} from "../../models/game";
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  searchText: string;

  transform(games: Game[], searchName: string, searchYear: string, searchGenre: string): Game[] {
    if(!games) return [];
    if(!searchName && !searchYear && !searchGenre) return games;

    if(searchName){
      games = games.filter(game =>
        game.name.toLowerCase().indexOf(searchName.toLowerCase()) !== -1)
    }
    if(searchYear){
      games = games.filter(game =>
        game.year.toLowerCase().indexOf(searchYear.toLowerCase()) !== -1)
    }
    if(searchGenre){
      games = games.filter(game =>
        game.genre.toLowerCase().indexOf(searchGenre.toLowerCase()) !== -1)
    }

    return games;
  }
}
