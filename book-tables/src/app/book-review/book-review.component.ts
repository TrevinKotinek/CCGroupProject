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
const apiBaseUrl = 'http://ec2-52-15-151-109.us-east-2.compute.amazonaws.com:8000/api/books/';

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

  backBook():void{
    this.router.navigate(['/books/', this.id])
  }
  createReview(): void{
    this.router.navigate(['/create-review/', this.id])
  }

}
