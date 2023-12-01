import { Component, Input } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BookService } from '../book.service';
import { Observable } from 'rxjs';
const apiBaseUrl = 'http://ec2-3-16-113-191.us-east-2.compute.amazonaws.com:8000/api/books/';
@Component({
  selector: 'app-desc-page',
  templateUrl: './desc-page.component.html',
  styleUrls: ['./desc-page.component.css']
})
export class DescPageComponent {
  book: any;
  id: any;
  apiBookLink: any;
  currentRoute: any;
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private http: HttpClient,
    private router: Router
  ) {}
  
  // constructor(private route: ActivatedRoute, private http: HttpClient) { }
  ngOnInit(): void {
    this.currentRoute = this.router.url.split('/');
    console.log(this.currentRoute);
    this.id = parseInt(this.currentRoute[2]);
    console.log(this.id)

    
    
    this.getBook().subscribe((book: any) => {
      this.book = book;
    });

    // this.book = this.getDummyBook(isbn || '');
    // this.http.get<any>(`${apiBaseUrl}/${isbn}`).subscribe(
    //   (response: any) => {
    //     this.book = response;
    //   },
    //   (error) => {
    //     console.error('Error fetching book:', error);
    //   }
    // );
  }

  private getDummyBook(isbn: string): any {
    // Here you can create a dummy book object with the structure similar to your API response
    // This is just an example, replace it with your actual book structure
    return {
      isbn: isbn,
      title: 'Dummy Book',
      author: 'John Doe',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      // Add other properties as needed
    };
  }

  getBook(): Observable<any> {
    this.apiBookLink = apiBaseUrl + this.id;
    console.log(this.apiBookLink);
    return this.http.get(`${this.apiBookLink}`);
  }

  setId(id: any): void {
    this.id = id;
  }
}