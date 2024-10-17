export class Tile {
    id: number;
    letter: string;
    color: ColorEnum;

    constructor(id: number, letter: string, color: ColorEnum = ColorEnum.Default) {
        this.id = id;
        this.letter = letter;
        this.color = color;
    }
}

export enum ColorEnum {
    RightPlace = 'green',
    WrongPlace = 'yellow',
    NotInWord = 'grey',
    Default = '#121213',
}   