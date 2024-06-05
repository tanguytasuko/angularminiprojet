import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private usersApiUrl = 'https://jsonplaceholder.typicode.com/users';
  private todosApiUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.usersApiUrl);
  }

  getTodos(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.todosApiUrl);
  }

  getTodoById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.todosApiUrl}/${id}`);
  }
}
