import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exampleadress',
  templateUrl: './exampleadress.component.html',
  styleUrls: ['./exampleadress.component.css']
})
export class ExampleadressComponent implements OnInit {
  street:string;
  number:string;

  constructor() { 
    this.street="";
    this.number="";
  }

  ngOnInit(): void {
  }

}
