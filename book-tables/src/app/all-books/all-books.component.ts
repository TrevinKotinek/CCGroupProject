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
  allBooksApi = 'http://127.0.0.1:8000/api/books/'
  books: any;
  id: any;

  constructor(
    private router: Router,
    private bookService: BookService,
    private http: HttpClient
    ){}

    ngOnInit(): void {
      this.getBooks().subscribe((books: any) => {
        this.books = books;
      });
    }
    
    getBooks(): Observable<any> {
      return this.http.get(`${this.allBooksApi}`);
    }

  nextPage(id: string): void{
    this.router.navigate(['/books/', id])
  }
}
