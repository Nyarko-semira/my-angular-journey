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
 

}
