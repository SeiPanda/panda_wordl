import { Component, Input, OnInit } from '@angular/core';
import { ColorEnum, Tile } from '../core/model/tile.model';

@Component({
  selector: 'app-guess',
  templateUrl: './guess.component.html',
  styleUrls: ['./guess.component.scss']
})
export class GuessComponent implements OnInit{
 
  @Input() guess: string = "";
  tiles: Tile[] = [];

  ngOnInit(): void {
   for (let i = 0; i < this.guess.length; i++) {
     this.tiles.push({ letter: this.guess[i], color: ColorEnum.Default, id: i });
   }

   if(this.tiles.length < 5) {
     for (let i = this.tiles.length; i < 5; i++) {
       this.tiles.push({ letter: '', color: ColorEnum.Default, id: i });
     }
   }
  }
}
