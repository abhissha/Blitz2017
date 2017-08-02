import { Component, Input } from '@angular/core';
import { Shark } from '../models/shark';

@Component({
  selector: 'app-shark-detail',
  templateUrl: './sharkDetails.component.html',
  styleUrls: ['./sharkDetails.component.css']
})

export class SharkDetailComponent {
  @Input() shark: Shark;
}
