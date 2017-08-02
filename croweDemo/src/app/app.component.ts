import { Component } from '@angular/core';
import { Shark } from '../models/shark';
import { SharkService } from '../services/shark.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SharkService]
})
export class AppComponent {
  title = 'Shark Tank';
  sharks: Shark[];
  selectedShark: Shark;

  constructor(private sharkService: SharkService) { }

  getSharks(): void {
    this.sharkService.getSharks().then(sharks => this.sharks = sharks);
  }

  ngOnInit(): void {
    this.getSharks();
  }


  onSelect(shark: Shark): void {
    this.selectedShark = shark;
  }
}
