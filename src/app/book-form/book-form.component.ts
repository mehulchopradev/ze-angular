import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  /* title: string;

  price: number;

  pages: number; */

  book: Book;

  showSuccess: boolean;
  showError: boolean;

  @Output()
  onCancel: EventEmitter<any>;

  @Output()
  onSuccess: EventEmitter<Book>;

  constructor(public http: HttpClient) {
    this.onCancel = new EventEmitter<any>();
    this.onSuccess = new EventEmitter<Book>();
    this.book = new Book();
    this.showSuccess = false;
    this.showError = false;
  }

  ngOnInit() {
  }

  onCancelLink() {
    this.onCancel.emit();
  }

  onSave() {
    // const { title, price, pages } = this;
    this.showSuccess = false;
    this.showError = false;

    const book = this.book;
    const data = { book };
    // console.log(JSON.stringify(data)); // tells us how the json data will look

    this.http.post('http://localhost:3000/books', data).subscribe((data: Book) => {
      this.book = new Book();
      this.showSuccess = true;

      this.onSuccess.emit(data);
    }, (err) => {
      this.showError = true;
    });
  }

}
