import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { TodosComponent } from './todos/todos.component';
import { LibraryComponent } from './library/library.component';
import { LibraryIndexComponent } from './library-index/library-index.component';
import { LibraryDetailsComponent } from './library-details/library-details.component';


const routes: Routes = [
  { path: 'calc', component: CalculatorComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'library', component: LibraryComponent, children: [
    { path: 'index', component: LibraryIndexComponent },
    { path: 'details', component: LibraryDetailsComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
