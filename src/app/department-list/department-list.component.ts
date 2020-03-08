import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  constructor(private router:Router) { }

  departments=[
    {"id":1,"name":"Angular"},
    {"id":2,"name":"NodeJS"},
    {"id":3,"name":"CSS"},
    {"id":4,"name":"HTML5"},
    {"id":5,"name":"Ruby"},
    {"id":6,"name":"ReactJS"},
  ]

  ngOnInit() {
  }

  onSelect(department){
    this.router.navigate(['/department',department.id]);

  }

}
