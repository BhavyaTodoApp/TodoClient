import { HelperService } from './helper.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  tasks: Task[] = [];
  addTaskForm = new FormGroup ({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });
  constructor(private helperService: HelperService, private taskService: TaskService) {

  }
  ngOnInit() {
    console.log(this.taskService.get());
    this.taskService.get().subscribe(res => {
      this.tasks = res;
    });
  }
  onSubmit() {
    this.taskService.add(this.addTaskForm.value).subscribe((task: Task) => {
      this.tasks.push(task);
      console.log(this.tasks);
    });
    this.addTaskForm.reset();
  }
  onFilterChange(task) {
    this.taskService.update(task);
  }
}
