import { Component } from '@angular/core';
import { BusinessComponent } from '../business/business.component';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent {

  securityArr = [

    {

      "key": "INTERCOM",
      "value": "INTERCOM"
    },
    {
      "key": "ALARM",
      "value": "ALARM"
    },

    {
      "key": "SECURITY_DOORS",
      "value": "SECURITY_DOORS"

    },

    {
      "key": "MONITORING",
      "value": "MONITORING"

    },

    {
      "key": "SECURITY_WINDOWS",
      "value": "SECURITY_WINDOWS"

    },

    {
      "key": "SECURITY_AGENCY",
      "value": "SECURITY_AGENCY"

    }

  ]

  security = {

    securityList: [],
    multiLatchLocks: null,
    certifiedLocks: null,
    insuredLengthInYears: null,
    houseLastYearClaims: null,
    houseLastTwoYearsClaims: null,
    houseLastThreeYearsClaims: null,
    houseLastTwentyYearsFloods: null,
    insuredPersonNumber: null,
    clientType: "",
    business: BusinessComponent
  }

  arrChangeSecurity(event) {
      let index = this.security.securityList.indexOf(event.target.value)
      if (index == -1) {
        this.security.securityList.push(event.target.value);
      }
      else {
        this.security.securityList.splice(index, 1);
      }
      console.log(this.security);
    }



}


