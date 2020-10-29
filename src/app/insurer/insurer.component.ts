import { Component } from '@angular/core';
import { AdressComponent } from '../adress/adress.component';
import { CorrespondenceAddressComponent } from '../correspondence-address/correspondence-address.component';

@Component({
  selector: 'app-insurer',
  templateUrl: './insurer.component.html',
  styleUrls: ['./insurer.component.css']
})
export class InsurerComponent{

  insurer ={

    name: "",
    surname: "",
    familyName: "",
    pesel: "",
    phoneNumber: "",
    email: "",
    maritalStatus: "",
    Address: AdressComponent,
    correspondenceAddress: CorrespondenceAddressComponent,
    profession: "",
  }


}
