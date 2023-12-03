import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AllBooksComponent } from './all-books/all-books.component';

import { DescPageComponent } from './desc-page/desc-page.component';
import { routes } from './app-routing.module';

import { BookReviewComponent } from './book-review/book-review.component';
import { CreateReviewComponent } from './create-review/create-review.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AllBooksComponent,
    DescPageComponent,
    BookReviewComponent,
    CreateReviewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('token'),
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
