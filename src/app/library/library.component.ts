import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

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
