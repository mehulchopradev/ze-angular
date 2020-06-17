import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../book';
import { BooksService } from '../books.service';

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
  constructor(http: HttpClient, private booksService: BooksService) {
    this.http = http;
    this.books = [];
    this.showError = false;
  }

  async ngOnInit() {
    let data: any;
    try {
      data = await this.booksService.getAllBooks();
    } catch (err) {
      console.log(err);
      this.showError = true;
      return;
    }

    const { books } = data;
    this.books = books;

    /* this.booksService.getAllBooks().then((data: any) => {
      const { books } = data;
      this.books = books;
    }, (err) => {
      console.log(err);
      this.showError = true;
    }); */
    /* this.http.get('http://localhost:3000/books').subscribe((data: any) => {
      const { books } = data;
      this.books = books;
    }, (err) => {
      console.log(err);
      this.showError = true;
    }); */
  }

  ngOnChanges(changes: SimpleChanges) {
    const { newBook } = changes;
    if (!newBook.previousValue && newBook.currentValue) {
      this.books.push(newBook.currentValue);
    }
  }
}
