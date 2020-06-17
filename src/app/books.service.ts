import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000';
  }

  getAllBooks(): Promise<any> {
    return this.http.get(`${this.baseUrl}/books`).toPromise();
  }

  saveBook(book: any): Promise<Book> {
    const data = { book };
    const obs: Observable<Book> = this.http.post('http://localhost:3000/books', data) as Observable<Book>;
    return obs.toPromise();
  }
}
