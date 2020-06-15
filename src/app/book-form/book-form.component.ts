import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Book } from '../book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  showSuccess: boolean;
  showError: boolean;

  @Output()
  onCancel: EventEmitter<any>;

  @Output()
  onSuccess: EventEmitter<Book>;

  bookFormGroup: FormGroup;

  constructor(public http: HttpClient, public fb: FormBuilder) {
    this.onCancel = new EventEmitter<any>();
    this.onSuccess = new EventEmitter<Book>();
    this.showSuccess = false;
    this.showError = false;
    /* this.bookFormGroup = new FormGroup({
        title: new FormControl(),
        price: new FormControl(),
        pages: new FormControl()
    }) */
    this.bookFormGroup = fb.group({
        title: ['', Validators.required],
        price: [''],
        pages: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onCancelLink() {
    this.onCancel.emit();
  }

  onSave() {
    const { bookFormGroup }  = this;
    const book = bookFormGroup.value;
    this.showSuccess = false;
    this.showError = false;

    const data = { book };
    // console.log(JSON.stringify(data)); // tells us how the json data will look

    this.http.post('http://localhost:3000/books', data).subscribe((data: Book) => {
      bookFormGroup.reset();
      this.showSuccess = true;

      this.onSuccess.emit(data);
    }, (err) => {
      this.showError = true;
    });
  }

  get title() {
      return this.bookFormGroup.get('title');
  }

  get pages() {
      return this.bookFormGroup.get('pages');
  }
}
