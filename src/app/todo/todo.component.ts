import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos!: any[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getTodos().pipe(
      map(todos => todos.filter((todo: any) => todo.completed).slice(0, 10))
    ).subscribe((data: any[]) => {
      this.todos = data;
    });
  }
}
