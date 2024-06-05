import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string = 'liste des personnes';
  users!: any[];
  isListVisible: boolean = true;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getUsers().subscribe((data: any[]) => {
      this.users = data;
    });
  }

  toggleListVisibility(): void {
    this.isListVisible = !this.isListVisible;
  }
}
