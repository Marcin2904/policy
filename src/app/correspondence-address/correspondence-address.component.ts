import { Component } from '@angular/core';

@Component({
  selector: 'app-correspondence-address',
  templateUrl: './correspondence-address.component.html',
  styleUrls: ['./correspondence-address.component.css']
})
export class CorrespondenceAddressComponent {

  correspondenceAddress = {

    street: "",
    houseNumber: "",
    flatNumber: "",
    postcode: "",
    city: "",


  }
}
