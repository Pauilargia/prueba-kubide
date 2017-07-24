import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes } from '@angular/router';

import { RouterModule } from '@angular/router';
import { routes } from './app.routing';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooPageComponent } from './foo-page/foo-page.component';
import { BarPageComponent } from './bar-page/bar-page.component';
import { RollingPageComponent } from './rolling-page/rolling-page.component';
import { BeatlesPageComponent } from './beatles-page/beatles-page.component';
import { QueenPageComponent } from './queen-page/queen-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FooPageComponent,
    BarPageComponent,
    RollingPageComponent,
    BeatlesPageComponent,
    QueenPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [], //Services
  bootstrap: [AppComponent]
})
export class AppModule { }
