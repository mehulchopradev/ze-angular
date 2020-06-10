import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  http: HttpClient;

  books: Book[];

  // Dependency Injection (DI)
  constructor(http: HttpClient) {
    this.http = http;
    this.books = [];
  }

  ngOnInit() {
    this.http.get('http://localhost:3000/books').subscribe(() => {
    });
  }

}
