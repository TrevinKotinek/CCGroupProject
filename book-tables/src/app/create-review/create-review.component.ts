import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../book-review/book-review.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.css']
})
export class CreateReviewComponent {
  private apiUrl = 'http://127.0.0.1:8080/api/books/1';

  constructor(private http: HttpClient) {}

  getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.apiUrl}/reviews`);
  }

  getUsers(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/users`);
  }

  getBooks(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/books`);
  }

}
