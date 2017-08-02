import { Injectable } from '@angular/core';

import { Shark } from '../models/shark';
import { SHARKS } from '../models/sharkList';

@Injectable()
export class SharkService {
  getSharks(): Promise<Shark[]> {
    return Promise.resolve(SHARKS);
  }
}
