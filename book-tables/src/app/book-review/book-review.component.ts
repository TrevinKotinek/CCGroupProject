import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Review {
  id: number;
  review_user: string;
  rating: number;
  description: string;
  active: boolean;
  created: Date;
  update: Date;
}

@Component({
  selector: 'app-book-review',
  templateUrl: './book-review.component.html',
  styleUrls: ['./book-review.component.css']
})


export class BookReviewComponent {
  private apiUrl = 'http://127.0.0.1:8080/api/books/1';
  
  reviews: Review[] = [];
  
  
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getReviews().subscribe((reviews: Review[]) => {
      this.reviews = reviews;
    });
  }
  
  getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.apiUrl}/reviews/`);
  }

}
