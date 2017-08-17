import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const sharks = [
            { id: 0, name: 'Shark0', rating: 9 },
            { id: 1, name: 'Shark1', rating: 1 },
            { id: 2, name: 'Shark2', rating: 8 },
            { id: 3, name: 'Shark3', rating: 3 },
            { id: 4, name: 'Shark4', rating: 6 },
            { id: 5, name: 'Shark5', rating: 4 }
        ];
        return { sharks };
    }
}
