import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppPublicationsComponent } from './app.publications/app.publications.component';
import { AppTeachingComponent } from './app.teaching/app.teaching.component';

export const routes: Routes =
[
  {
    path: 'publications',
    component: AppPublicationsComponent,
    title: 'Luke Serafin Publications'
  },
  {
    path: 'teaching',
    component: AppTeachingComponent,
    title: 'Luke Serafin Teaching'
  }
];
