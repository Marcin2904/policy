import { MainService } from './../main.service';
import { Component } from '@angular/core';
import { PolicyFormClass } from 'src/models/policy-form';
import { PropertyComponent } from '../property/property.component';
import { PropertyInfoComponent } from '../property-info/property-info.component';
import { SecurityComponent } from '../security/security.component';
import { ContainerComponent } from '../container/container.component';



@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {

  policyArr = [

    {
      "type": "EQUIPMENT",
      "selected": "",
      "insuranceSum": ""
    },
    {
      "type": "PERSONAL_THINGS",
      "selected": "",
      "insuranceSum": ""
    },

    {
      "type": "WALLS",
      "selected": "",
      "insuranceSum": "",
    },

    {
      "type": "BURGLARY",
      "selected": "",
      "insuranceSum": "",
    },
    {
      "type": "OC_INSURANCE",
      "selected": "",
      "insuranceSum": "",
    }
  ]

  policy = {

    agreemnet1: "",
    agreemnet2: "",
    agreemnet3: "",
    agreemnet4: "",
    agreemnet5: "",
    startDate: "",



    scope: [],
    street: "",
    houseNumber: "",
    flatNumber: "",
    postcode: "",
    city: "",
    floorType: "",
    property: new ContainerComponent,
    propertyInfo: null,
    security: null,

    

    agreementProcessingPersonalData: ""

  };


  arrChangeScope(event) {
    let index = this.policy.scope.indexOf(event.target.value)
    if (index == -1) {
      this.policy.scope.push(event.target.value);
    }
    else {
      this.policy.scope.splice(index, 1);
    }
    console.log(this.policy.scope);
  }
  

  constructor(private mainService: MainService) { }

  create() {

    

    let result: PolicyFormClass = {

      // MAINVIEW
      agreemnet1: this.policy.agreemnet1,
      agreemnet2: this.policy.agreemnet2,
      agreemnet3: this.policy.agreemnet3,
      agreemnet4: this.policy.agreemnet4,
      agreemnet5: this.policy.agreemnet5,
      startDate: this.policy.startDate,
      scope: [],
      



      // PROPERTY
      
      
      

      //PROPERTY-INFO
      

      // SECURITY 

      //BUSINESS




      // INSURER
      


    }

    

      this.mainService.postPolicy(result).subscribe(result => {

      },
        (err: Error) => { console.log(err.message) })
      console.log(result);
    }

    
  }

