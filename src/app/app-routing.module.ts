import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { TodosComponent } from './todos/todos.component';
import { LibraryComponent } from './library/library.component';


const routes: Routes = [
  { path: 'calc', component: CalculatorComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'library', component: LibraryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
