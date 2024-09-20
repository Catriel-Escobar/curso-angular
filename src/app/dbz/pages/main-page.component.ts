import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  public characters: Character[] = [
    {
      name: 'Goku',
      power: 10000,
    },
    {
      name: 'Krilin',
      power: 1000,
    },
    {
      name: 'Vegeta',
      power: 15000,
    },
  ];

  onNewCharacter(character: Character): void {
    console.log('Main page');
    console.log(character);
    this.characters.push(character);
  }

  onDeleteId(id: number): void {
    console.log(id);
    this.characters.splice(id, 1);
  }
}
