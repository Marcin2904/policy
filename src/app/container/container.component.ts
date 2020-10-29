import { Component, OnInit } from '@angular/core';
import { ExampleadressComponent } from '../exampleadress/exampleadress.component';
import { PersonComponent } from '../person/person.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
    person:PersonComponent
    address:ExampleadressComponent

  constructor() { 
    this.person = new PersonComponent;
    this.address = new ExampleadressComponent;


  }



}
