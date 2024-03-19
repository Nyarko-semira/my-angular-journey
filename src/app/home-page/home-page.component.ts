import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TodoItemComponent } from './todo-item/todo-item.component';
  


 
  type Todo = {
    name : string
    time : Date
    type : string
    isDone : boolean
  }

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink, TodoItemComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

 todoItems:Todo[] = [{
  name : 'breakfast',
  time : new Date(new Date().setHours(1)),
  type : 'food',
  isDone : true

 }, 
{
  name : 'lunch',
  time : new Date(new Date().setHours(4)),
  type : 'food',
  isDone : true
},

{
  name : 'go to the mall',
  time : new Date(new Date().setHours(5)),
  type : 'errands',
  isDone : false
},

{
  name : 'dinner',
  time : new Date(new Date().setHours(21)),
  type : 'food',
  isDone : false
} 

]
 
}


