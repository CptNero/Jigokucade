import { Injectable } from '@angular/core';
import { Game } from '../../models/game';
import { Comment} from "../../models/comment";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  now = new Date();

  games = [
    {id: 1, name: "Tetris", year: "1998", genre: "logic", description: "Place colorful blocks", image: "https://i.ytimg.com/vi/QQ5U-rN7Veg/maxresdefault.jpg"},
    {id: 2, name: "Minesweeper",  year: "1989", genre: "logic", description: "Mine", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMoMGMEmghAkTxOIYmEMjoPBx1OED1lBN-KBWTi--04UlQZlL1&usqp=CAU"},
    {id: 3, name: "Pong", year: "1996", genre: "logic", description: "It's like shitty table tennis", image: "https://i.cdn29.hu/apix_collect_c/1203/pong/pong_screenshot_20180131183408_1_original_1150x645_cover.png"},
    {id: 4, name: "Space Invaders", year: "1980", genre: "action", description: "Shoot aliens", image: "https://scontent-vie1-1.xx.fbcdn.net/v/t31.0-8/s960x960/15272214_1818474721743212_7229664870975058849_o.jpg?_nc_cat=108&_nc_sid=dd9801&_nc_ohc=Rp9ayyRWrksAX8kqT2F&_nc_ht=scontent-vie1-1.xx&_nc_tp=7&oh=911ba415db213ef017eb9c86f9a0d1e9&oe=5EC12CB6"},
    {id: 6, name: "Mario", year: "1980", genre: "platformer", description: "Italian plumber destroys public infrastructure", image: "https://4cdn.hu/kraken/image/upload/s--TGJ1sEby--/c_limit,w_1160/73V2StDp0hXyKeBcs.jpeg"},
    {id: 6, name: "Mario", year: "1980", genre: "platformer", description: "Italian plumber destroys public infrastructure", image: "https://4cdn.hu/kraken/image/upload/s--TGJ1sEby--/c_limit,w_1160/73V2StDp0hXyKeBcs.jpeg"},
    {id: 6, name: "Mario", year: "1980", genre: "platformer", description: "Italian plumber destroys public infrastructure", image: "https://4cdn.hu/kraken/image/upload/s--TGJ1sEby--/c_limit,w_1160/73V2StDp0hXyKeBcs.jpeg"},
    {id: 6, name: "Mario", year: "1980", genre: "platformer", description: "Italian plumber destroys public infrastructure", image: "https://4cdn.hu/kraken/image/upload/s--TGJ1sEby--/c_limit,w_1160/73V2StDp0hXyKeBcs.jpeg"},
  ];

  comments = [
    {id: 1, gameId: 1, commenterName: "Jack", commentBody: "Amazing game!", sentOn: this.now},
    {id: 2, gameId: 1, commenterName: "Peter", commentBody: "Very fun!", sentOn: this.now},
    {id: 3, gameId: 2, commenterName: "Joe", commentBody:  "Time of my life!", sentOn: this.now},
    {id: 4, gameId: 2,commenterName: "lightwitheangle", commentBody: "Mi ez a szar", sentOn: this.now},
    {id: 5, gameId: 3,commenterName: "Rotordált", commentBody: "Szilvás buktát mert azt szeretem", sentOn: this.now},
    {id: 6, gameId: 3,commenterName: "QualifiedVideoGameJournalist", commentBody: "It's like skyrim without skyrim", sentOn: this.now}
  ];

  constructor() { }

  get Games() : Game[]{
    return this.games;
  }

  get Comments() : Comment[]{
    return this.comments;
  }

  get Now() : Date{
    return this.now;
  }
}
