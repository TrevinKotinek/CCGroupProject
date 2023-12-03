import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../book-review/book-review.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
const apiBaseUrl = 'http://127.0.0.1:8000/api/books/';
const authToken = localStorage.getItem('token')
const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': `Token ${authToken}`
  });


@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.css']
})
export class CreateReviewComponent {
  
  reviewForm: FormGroup;
  book: any;
  id: any;  
  currentRoute: any;
  apiReviewLink: any;
  
  reviews: Review[] = [];
  
  
  constructor(private http: HttpClient,private router: Router,private fb: FormBuilder) {
    this.reviewForm = this.fb.group({
      review_user: [''],
      rating: [''],
      description: [''],
      book:['']
    });
  }

  ngOnInit(): void {
    this.currentRoute = this.router.url.split('/');
    console.log(this.currentRoute);
    this.id = parseInt(this.currentRoute[2]);
    console.log(this.id)
    this.getBook().subscribe((book: any) => {
      this.book = book;
      this.reviewForm.get('book')?.patchValue(this.book.title);
    });
    console.log(this.reviewForm.controls)
    this.reviewForm.get('review_user')?.patchValue(localStorage.getItem('username'))

    
  }

  getBook(): Observable<any> {
    this.apiReviewLink = apiBaseUrl + this.id;
    console.log(this.apiReviewLink)
    return this.http.get(`${this.apiReviewLink}`);
  }
  
  submitReview(): void  {
    this.apiReviewLink = apiBaseUrl + this.id;
    this.http.post(`${this.apiReviewLink}/reviews/create/`,this.reviewForm.value, {headers})
    .subscribe(response => {
      // Handle the response from the backend if needed
      console.log('Django response:', response);
    });
    this.router.navigate(['/review/', this.id]);
  }

  login(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post(`http://127.0.0.1:8000//api/account/login/`, body);
  }
}




