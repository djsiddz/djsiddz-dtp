import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ExamplesComponent } from './examples/examples.component';
import { DtpComponent } from './dtp/dtp.component';
import { GetStartedComponent } from './get-started/get-started.component';


@NgModule({
  declarations: [
    AppComponent,
    ExamplesComponent,
    DtpComponent,
    GetStartedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
