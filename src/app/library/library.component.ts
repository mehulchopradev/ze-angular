import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  isBookFormVisible: boolean;

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
}
