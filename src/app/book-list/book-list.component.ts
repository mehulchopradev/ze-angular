import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnChanges {

  http: HttpClient;

  books: Book[];

  showError: boolean;

  @Input()
  newBook: Book;

  // Dependency Injection (DI)
  constructor(http: HttpClient) {
    this.http = http;
    this.books = [];
    this.showError = false;
  }

  ngOnInit() {
    this.http.get('http://localhost:3000/books').subscribe((data: any) => {
      const { books } = data;
      this.books = books;
    }, (err) => {
      console.log(err);
      this.showError = true;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    const { newBook } = changes;
    if (!newBook.previousValue && newBook.currentValue) {
      this.books.push(newBook.currentValue);
    }
  }
}
