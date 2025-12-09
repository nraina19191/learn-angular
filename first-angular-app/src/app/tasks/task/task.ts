import { Component, input, output } from '@angular/core';
import { TaskType } from '../../types/taskType';

@Component({
  selector: 'app-task',
  templateUrl: './task.html',
  styleUrl: './task.css',
  standalone: false
})
export class Task {
  task = input.required<TaskType>();
  completeTask = output<string>();

  onCompleteTask(taskId: string) {
    this.completeTask.emit(taskId);
  }
}
