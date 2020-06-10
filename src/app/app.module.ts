import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TodosComponent } from './todos/todos.component';
import { LibraryComponent } from './library/library.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LiveCalcResultsComponent } from './live-calc-results/live-calc-results.component';
import { TitlePipe } from './title.pipe';
import { BookFormComponent } from './book-form/book-form.component';
import { BookListComponent } from './book-list/book-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    TodosComponent,
    LibraryComponent,
    NavbarComponent,
    LiveCalcResultsComponent,
    TitlePipe,
    BookFormComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
