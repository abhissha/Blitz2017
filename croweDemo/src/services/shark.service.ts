import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Shark } from '../models/shark';

@Injectable()
export class SharkService {
    private sharksUrl = 'api/sharks';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    getSharks(): Promise<Shark[]> {
        return this.http.get(this.sharksUrl)
            .toPromise()
            .then(response => response.json().data as Shark[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    getShark(id: number): Promise<Shark> {
        const url = `${this.sharksUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Shark)
            .catch(this.handleError);
    }

    update(shark: Shark): Promise<Shark> {
        const url = `${this.sharksUrl}/${shark.id}`;
        return this.http
            .put(url, JSON.stringify(shark), { headers: this.headers })
            .toPromise()
            .then(() => shark)
            .catch(this.handleError);
    }

    create(name: string): Promise<Shark> {
        return this.http
            .post(this.sharksUrl, JSON.stringify({ name: name, rating: 0 }), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data as Shark)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.sharksUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
}
