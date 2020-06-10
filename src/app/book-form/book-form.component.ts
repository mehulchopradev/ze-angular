import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  @Output()
  onCancel: EventEmitter<any>;

  constructor() {
    this.onCancel = new EventEmitter<any>();
  }

  ngOnInit() {
  }

  onCancelLink() {
    this.onCancel.emit();
  }

}
