import { Injectable } from '@angular/core';

import { Shark } from '../models/shark';
import { SHARKS } from '../models/sharkList';

@Injectable()
export class SharkService {
    getSharks(): Promise<Shark[]> {
        return Promise.resolve(SHARKS);
    }

    getShark(id: number): Promise<Shark> {
        return this.getSharks()
            .then(sharks => sharks.find(shark => shark.id === id));
    }
}
