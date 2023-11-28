import { Component } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent {
  fakeData: any;

  constructor(
    private router: Router,
    private bookService: BookService
    ){}

  ngOnInit(): void{
      this.fakeData = this.bookService.getAllBooks();
  }

  nextPage(id: string): void{
    this.router.navigate(['/books/:', {isbn: id}])
  }
}
