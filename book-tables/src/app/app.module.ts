import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { DescPageComponent } from './desc-page/desc-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AllBooksComponent,
    DescPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
