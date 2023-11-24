import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { DescPageComponent } from './desc-page/desc-page.component';
import { routes } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AllBooksComponent,
    DescPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
