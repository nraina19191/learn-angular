import { Component, input, signal } from '@angular/core';
import { DUMMY_TASKS } from '../dummy-tasks';
import type { UserProfile } from '../types/userType';
import type { NewTaskType, TaskType } from '../types/taskType';
import { Task } from './task/task';
import { NewTask } from "./new-task/new-task";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
  standalone: false
})
export class Tasks {
  user = input.required<UserProfile>();
  tasks = signal<TaskType[]>(DUMMY_TASKS)
  isAddingTask = false

  get selectedUserTasks() {
    return this.tasks().filter(x => x.userId == this.user().id);
  }

  onCompleteTask(taskId: string) {
    this.tasks.set(this.tasks().filter(x => x.id != taskId));
  }

  onStartAddingTask() {
    this.isAddingTask = true
  }

  onCancelTask() {
    this.isAddingTask = false
  }

  onAddNewTask(newTask: NewTaskType) {
    this.tasks().unshift({
      id: new Date().getMilliseconds().toLocaleString(),
      userId: this.user().id,
      ...newTask
    });

    this.isAddingTask = false
  }
}
