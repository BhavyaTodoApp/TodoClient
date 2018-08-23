import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  url = 'http://localhost:3000/api/tasks/';
  constructor(private http: HttpClient) { }

  add(formData) {
    // POST task to server
    return this.http.post(this.url, formData);
  }
  update(task) {
    const id = task._id;
     delete task._id;
     delete task.__v;
     this.http.put(this.url + id, task).subscribe(res=>{
      console.log(res);
     })

  }
  get(): Observable<any> {
     return this.http.get(this.url);
  }
}
