import { Component } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DescPageComponent } from '../desc-page/desc-page.component';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent {
  allBooksApi = 'http://ec2-52-15-151-109.us-east-2.compute.amazonaws.com:8000/api/books/'
  books: any;
  id: any;

  constructor(
    private router: Router,
    private bookService: BookService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.router.navigate(['/all-books']);
    this.getBooks().subscribe((books: any) => {
      this.books = books;
    });
  }

  getBooks(): Observable<any> {
    return this.http.get(`${this.allBooksApi}`);
  }

  nextPage(id: string): void {
    this.router.navigate(['/books/', id])
  }
}
