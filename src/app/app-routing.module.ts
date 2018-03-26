import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component'
import { ExamplesComponent } from './examples/examples.component'
import { GetStartedComponent } from './get-started/get-started.component'

const routes: Routes = [
  { path: '', component: ExamplesComponent },
  { path: 'get-started', component: GetStartedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
