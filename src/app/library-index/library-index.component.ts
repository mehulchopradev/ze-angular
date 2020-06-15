import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-library-index',
  templateUrl: './library-index.component.html',
  styleUrls: ['./library-index.component.scss']
})
export class LibraryIndexComponent implements OnInit {

  isBookFormVisible: boolean;
  newBook: Book;

  constructor() {
    this.isBookFormVisible = false;
  }

  ngOnInit() {
  }

  onShowBookForm() {
    this.isBookFormVisible = true;
  }

  onHideBookForm() {
    this.isBookFormVisible = false;
  }

  onBookAdded(book: Book) {
    this.newBook = book;
  }

}
