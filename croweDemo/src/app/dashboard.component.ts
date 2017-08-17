import { Component, OnInit } from '@angular/core';
import { Shark } from '../models/shark';
import { SharkService } from '../services/shark.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  sharks: Shark[] = [];

  constructor(private SharkService: SharkService) { }

  ngOnInit(): void {
    this.SharkService.getSharks()
      .then(sharks => this.sharks = sharks.sort((a, b) =>  (b.rating - a.rating)).slice(0, 3));
  }
}
