import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TodoItemComponent } from './todo-item/todo-item.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink, TodoItemComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  date = new Date()
  date1 = new Date(new Date().setHours(1))
  date2 =  new Date(new Date().setHours(2))
  date3 = new Date(new Date().setHours(3))
 date4 = new Date(new Date().setHours(4))
 date5 = new Date(new Date().setHours(5))
 date6 = new Date(new Date().setHours(6))
 date7 = new Date(new Date().setHours(7))

}
