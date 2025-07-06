import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewAllComponent } from './tracking/view-all/view-all.component';
import { SummaryComponent } from './tracking/summary/summary.component';
import { CreateComponent } from './tracking/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewAllComponent,
    SummaryComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
