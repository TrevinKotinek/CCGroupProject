import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BookService } from '../book.service';
const apiBaseUrl = 'http://localhost:8080';
@Component({
  selector: 'app-desc-page',
  templateUrl: './desc-page.component.html',
  styleUrls: ['./desc-page.component.css']
})
export class DescPageComponent {
  book: any;
  
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}
  
  // constructor(private route: ActivatedRoute, private http: HttpClient) { }
  ngOnInit(): void {
    const isbn = this.route.snapshot.paramMap.get('isbn');
    
    this.book = this.bookService.getBookByIsbn(isbn || '');
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
}