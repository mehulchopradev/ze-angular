import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-library-details',
  templateUrl: './library-details.component.html',
  styleUrls: ['./library-details.component.scss']
})
export class LibraryDetailsComponent implements OnInit {

  book: any
  bookLoaded: boolean

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.book = {};
    this.bookLoaded = false;
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const { bookId } = params;
      this.http.get(`http://localhost:3000/books/${bookId}`).subscribe((data: any) => {
        const { books } = data;
        this.bookLoaded = true;
        this.book = books;
      });
    });
  }

}
