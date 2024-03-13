import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  template: ` <div class="card">
    <div class="container">
      <h4><b>{{name}}</b></h4>
      <p>{{time}}</p>
      <p>{{type}}</p>
      <p>{{status}}</p>
    </div>
  </div>`,
  styleUrl: './todo-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoItemComponent {
  @Input()
  name!:string
  @Input()
  time!: string
  @Input()
  type!: string
  @Input()
  status!: string

  
}
