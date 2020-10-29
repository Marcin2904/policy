import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {

  name:string;
  surname:string

  constructor() { 
    this.name="";
    this.surname="";
  }

  ngOnInit(): void {
  }

}
