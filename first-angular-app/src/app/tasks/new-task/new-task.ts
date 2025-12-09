import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { NewTaskType } from '../../types/taskType';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
  standalone: false
})
export class NewTask {
  cancelTask = output();
  onSubmitTask = output<NewTaskType>();

  newTask = signal<NewTaskType>({
    title: '',
    dueDate: '',
    summary: ''
  });

  onCancelTask() {
    this.cancelTask.emit();
  }

  onSubmit() {
    console.log(this.newTask())
    this.onSubmitTask.emit(this.newTask());
  }
}
