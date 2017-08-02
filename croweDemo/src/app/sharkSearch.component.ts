import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { SharkSearchService } from '../services/search.service';
import { Shark } from '../models/shark';

@Component({
    selector: 'app-shark-search',
    templateUrl: './sharkSearch.component.html',
    styleUrls: ['./sharkSearch.component.css'],
    providers: [SharkSearchService]
})
export class SharkSearchComponent implements OnInit {
    sharks: Observable<Shark[]>;
    private searchTerms = new Subject<string>();

    constructor(
        private sharkSearchService: SharkSearchService,
        private router: Router) { }

    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.sharks = this.searchTerms
            .debounceTime(300)        // wait 300ms after each keystroke before considering the term
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => term   // switch to new observable each time the term changes
                // return the http search observable
                ? this.sharkSearchService.search(term)
                // or the observable of empty heroes if there was no search term
                : Observable.of<Shark[]>([]))
            .catch(error => {
                console.log(error);
                return Observable.of<Shark[]>([]);
            });
    }

    gotoDetail(shark: Shark): void {
        const link = ['/detail', shark.id];
        this.router.navigate(link);
    }
}
