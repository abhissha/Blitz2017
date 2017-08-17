import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const sharks = [
            { id: 0, name: 'Bob', rating: 9 },
            { id: 1, name: 'Bill', rating: 1 },
            { id: 2, name: 'Mandy', rating: 8 },
            { id: 3, name: 'Rebecca', rating: 3 },
            { id: 4, name: 'Laura', rating: 6 },
            { id: 5, name: 'Alex', rating: 4 }
        ];
        return { sharks };
    }
}
