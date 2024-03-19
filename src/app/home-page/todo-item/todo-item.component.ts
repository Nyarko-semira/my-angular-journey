import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  template: ` <div class="card">
    <div class="container">
      <h4><b>{{name | uppercase}}</b></h4>
      <p>{{time | date:'shortTime'}}</p>
      <p>{{type}}</p>
      @if(isDone){
        <p>Done</p>
      }
      @else{
        <p>Not Done</p>
      }
    
    </div>
  </div>`,
  styleUrl: './todo-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoItemComponent {
  @Input()
  name!:string
  @Input()
  time!: Date
  @Input()
  type!: string
  @Input()
  isDone!: boolean

  
  
}


