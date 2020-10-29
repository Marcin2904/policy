import { Component } from '@angular/core';
import { AdressComponent } from '../adress/adress.component';

@Component({
  selector: 'app-property-info',
  templateUrl: './property-info.component.html',
  styleUrls: ['./property-info.component.css']
})
export class PropertyInfoComponent {

  propertyInfo = {


    houseOwnership: "",
    rentedPremise: "",
    businessActivity: "",
    cession: "",
    underConstruction: "",
    peopleLivingNumber: null,
    underagePersonNumber: null,
    permanentlyInhabited: "",
    wallsType: "",
    Address: AdressComponent,
    floorType: ""

  }

}
