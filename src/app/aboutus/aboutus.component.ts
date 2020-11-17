import { Component, OnInit } from '@angular/core';


export interface Employee {
  id: string;
  name: string;
  email: string;
  password: string; 
}

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  employees : Employee[]=[
    {id: '1', name: 'Darshana', email: 'darshana@gmail.com', password: '9196'},
    {id: '2', name: 'Thusitha', email: 'thusitha@gmail.com', password: '9705'},
    {id: '3', name: 'Adithya', email: 'adithya@gmail.com', password: '9424'}
  ];
  constructor() { }

  ngOnInit(): void {
  }
 
}
