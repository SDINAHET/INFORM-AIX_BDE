import { Component } from '@angular/core';
import { TaskService, Task } from '../../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  title: string = '';

  constructor(private taskService: TaskService, private router: Router) {}

  addTask(): void {
    if (this.title.trim()) {
      const newTask: Task = { id: 0, title: this.title, completed: false };
      this.taskService.addTask(newTask).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
