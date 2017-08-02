import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SharkDetailComponent } from './sharkDetails.component';
import { SharkComponent } from './shark.component';
import { SharkService } from '../services/shark.service';
import { DashboardComponent } from './dashboard.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SharkDetailComponent,
    SharkComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [SharkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
