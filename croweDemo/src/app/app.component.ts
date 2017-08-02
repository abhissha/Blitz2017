import { Component } from '@angular/core';
import { Shark } from '../models/shark';

const SHARKS: Shark[] = [
  { id: 1, name: 'Shark1' },
  { id: 2, name: 'Shark2' },
  { id: 3, name: 'Shark3' }
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shark Tank';
  sharks = SHARKS;
  selectedShark: Shark;

  onSelect(shark: Shark): void {
    this.selectedShark = shark;
  }
}
