import { Component, OnInit } from '@angular/core';
import { Shark } from '../models/shark';
import { SharkService } from '../services/shark.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-sharks',
  templateUrl: './shark.component.html',
  styleUrls: ['./shark.component.css']
})
export class SharkComponent implements OnInit {
  sharks: Shark[];
  selectedShark: Shark;

  constructor(
    private router: Router,
    private sharkService: SharkService) { }

  getSharks(): void {
    this.sharkService.getSharks().then(sharks => this.sharks = sharks);
  }

  ngOnInit(): void {
    this.getSharks();
  }

  onSelect(shark: Shark): void {
    this.selectedShark = shark;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedShark.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.sharkService.create(name)
      .then(hero => {
        this.sharks.push(hero);
        this.selectedShark = null;
      });
  }

  delete(shark: Shark): void {
    this.sharkService
      .delete(shark.id)
      .then(() => {
        this.sharks = this.sharks.filter(s => s !== shark);
        if (this.selectedShark === shark) { this.selectedShark = null; }
      });
  }
}
