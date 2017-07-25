import { Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { FooPageComponent } from './foo-page/foo-page.component';
import { BarPageComponent } from './bar-page/bar-page.component';
import { RollingPageComponent } from './rolling-page/rolling-page.component';
import { BeatlesPageComponent } from './beatles-page/beatles-page.component';
import { QueenPageComponent } from './queen-page/queen-page.component';


export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'foo', component: FooPageComponent },
  { path: 'bar', component: BarPageComponent },
  { path: 'the-rolling-stones', component: RollingPageComponent },
  { path: 'the-beatles', component: BeatlesPageComponent },
  { path: 'queen', component: QueenPageComponent }
];
