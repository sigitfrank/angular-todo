import { Component, OnInit } from '@angular/core'
import { Task } from '../../Task'
import { TaskService } from '../../services/task.service'
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = []

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks)
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => {
      return this.tasks = this.tasks.filter(oldTask => oldTask.id !== task.id)
    })
  }

  toggleTask(task: Task) {
    task.reminder = !task.reminder
    this.taskService.updateTaskReminder(task).subscribe()
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((e) => {
      return this.tasks = [e, ...this.tasks]
    })
  }

}
