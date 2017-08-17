import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const sharks = [
            { id: 0, name: 'Shark0' },
            { id: 1, name: 'Shark1' },
            { id: 2, name: 'Shark2' },
            { id: 3, name: 'Shark3' },
            { id: 4, name: 'Shark4' },
            { id: 5, name: 'Shark5' }
        ];
        return { sharks };
    }
}
