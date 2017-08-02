import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SharkDetailComponent } from './sharkDetails.component';
import { SharkComponent } from './shark.component';
import { SharkService } from '../services/shark.service';
import { DashboardComponent } from './dashboard.component';
import { SharkSearchComponent } from './sharkSearch.component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService } from '../data/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SharkDetailComponent,
    SharkComponent,
    DashboardComponent,
    SharkSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [SharkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
