import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Shark } from '../models/shark';

@Injectable()
export class SharkSearchService {

    constructor(private http: Http) { }

    search(term: string): Observable<Shark[]> {
        return this.http
            .get(`api/sharks/?name=${term}`)
            .map(response => response.json().data as Shark[]);
    }
}