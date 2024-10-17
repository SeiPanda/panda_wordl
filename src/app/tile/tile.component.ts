import { Component, Input } from '@angular/core';
import { ColorEnum, Tile } from '../core/model/tile.model';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent {
  @Input() letter: Tile = { letter: '', color: ColorEnum.Default , id:0};
}
