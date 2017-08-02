import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Shark } from '../models/shark';
import { SharkService } from '../services/shark.service';

@Component({
    selector: 'app-shark-detail',
    templateUrl: './sharkDetails.component.html',
    styleUrls: ['./sharkDetails.component.css']
})

export class SharkDetailComponent implements OnInit {

    @Input() shark: Shark;

    constructor(
        private sharkService: SharkService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.sharkService.getShark(+params.get('id')))
            .subscribe(shark => this.shark = shark);
    }

    goBack(): void {
        this.location.back();
    }
}
