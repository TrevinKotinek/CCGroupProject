// book.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private dummyBooks: any[] = [
    {
      isbn: '1',
      title: 'Book 1',
      author: 'Author 1',
      description: 'Description for Book 1',
    },
    {
      isbn: '2',
      title: 'Book 2',
      author: 'Author 2',
      description: 'Description for Book 2',
    },
    // Add more dummy books as needed
  ];

  getBookByIsbn(isbn: string): any {
    return this.dummyBooks.find((book) => book.isbn === isbn);
  }

  getAllBooks(): any {
    return this.dummyBooks;
  }
}
