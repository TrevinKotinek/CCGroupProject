import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


export interface Review {
  id: number;
  review_user: string;
  rating: number;
  description: string;
  active: boolean;
  created: Date;
  update: Date;
}
const apiBaseUrl = 'http://127.0.0.1:8000/api/books/';

@Component({
  selector: 'app-book-review',
  templateUrl: './book-review.component.html',
  styleUrls: ['./book-review.component.css']
})


export class BookReviewComponent {
  
  id: any;  
  currentRoute: any;
  apiReviewLink: any;
  
  reviews: Review[] = [];
  
  
  constructor(private http: HttpClient,private router: Router) {}

  ngOnInit(): void {
    this.currentRoute = this.router.url.split('/');
    console.log(this.currentRoute);
    this.id = parseInt(this.currentRoute[2]);
    console.log(this.id)
    this.getReviews().subscribe((reviews: Review[]) => {
      this.reviews = reviews;
    });
  }
  
  getReviews(): Observable<Review[]> {
    this.apiReviewLink = apiBaseUrl + this.id;
    return this.http.get<Review[]>(`${this.apiReviewLink}/reviews/`);
  }

}
