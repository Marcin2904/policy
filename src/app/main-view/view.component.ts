import { MainService } from './../main.service';
import { Component } from '@angular/core';
import { PolicyFormClass } from 'src/models/policy-form';



@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {

  policyArr = [

    {

      "key": "EQUIPMENT",
      "value": "EQUIPMENT"
    },
    {
      "key": "PERSONAL_THINGS",
      "value": "PERSONAL_THINGS"
    },

    {
      "key": "WALLS",
      "value": "WALLS"

    },

    {
      "key": "BURGLARY",
      "value": "BURGLARY"

    },

    {
      "key": "OC_INSURANCE",
      "value": "OC_INSURANCE"

    }
  ];

  // enum security {
//     INTERCOM,
//     ALARM,
//     SECURITY_DOORS,
//     MONITORING,
//     SECURITY_WINDOWS,
//     SECURITY_AGENCY

// }

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


  policy = {

    agreemnet1: "",
    agreemnet2: "",
    agreemnet3: "",
    agreemnet4: "",
    agreemnet5: "",
    startDate: "",

    name: "",
    surname: "",
    familyName: "",
    pesel: "",
    phoneNumber: "",
    email: "",
    maritalStatus: "",

    scope: [],
    street: "",
    houseNumber: "",
    flatNumber: "",
    postcode: "",
    city: "",
    floorType: "",


    propertyType: "",
    yearOfConstruct: "",
    areaOfApartment: null,
    equipmentInsuranceSum: null,
    personalThingsInsuranceSum: null,
    wallsInsuranceSum: null,

    postcode2: "",
    houseOwnership: "",
    housePostcode: "",
    rentedPremise: null,
    businessActivity: null,
    cession: null,
    peopleLivingNumber: null,
    underagePersonNumber: null,
    permanentlyInhabited: null,
    wallsType: "",

    security: [],
    multiLatchLocks: null,
    certifiedLocks: null,
    insuredLengthInYears: null,
    houseLastYearClaims: null,
    houseLastTwoYearsClaims: null,
    houseLastThreeYearsClaims: null,
    houseLastTwentyYearsFloods: null,
    insuredPersonNumber: null,
    clientType: "",

    bussinesName: "",
    nip: "",
    regon: ""

  };

  constructor(private mainService: MainService) { }

  create() {

    let result: PolicyFormClass = {

      agreemnet1: this.policy.agreemnet1,
      agreemnet2: this.policy.agreemnet2,
      agreemnet3: this.policy.agreemnet3,
      agreemnet4: this.policy.agreemnet4,
      agreemnet5: this.policy.agreemnet5,
      startDate: this.policy.startDate,

      name: this.policy.name,
      surname: this.policy.surname,
      familyName: this.policy.familyName,
      pesel: this.policy.pesel,
      phoneNumber: this.policy.phoneNumber,
      email: this.policy.email,
      maritalStatus: this.policy.maritalStatus,

      scope: this.policy.scope,
      street: this.policy.street,
      houseNumber: this.policy.houseNumber,
      flatNumber: this.policy.flatNumber,
      postcode: this.policy.postcode,
      city: this.policy.city,
      floorType: this.policy.floorType,

      housePostcode: this.policy.housePostcode,
      propertyType: this.policy.propertyType,
      yearOfConstruct: this.policy.yearOfConstruct,
      areaOfApartment: this.policy.areaOfApartment,
      equipmentInsuranceSum: this.policy.equipmentInsuranceSum,
      personalThingsInsuranceSum: this.policy.personalThingsInsuranceSum,
      wallsInsuranceSum: this.policy.wallsInsuranceSum,


      houseOwnership: this.policy.houseOwnership,
      rentedPremise: this.policy.rentedPremise,
      businessActivity: this.policy.businessActivity,
      cession: this.policy.cession,
      peopleLivingNumber: this.policy.peopleLivingNumber,
      underagePersonNumber: this.policy.underagePersonNumber,
      permanentlyInhabited: this.policy.permanentlyInhabited,
      wallsType: this.policy.wallsType,

      security: this.policy.security,
      multiLatchLocks: this.policy.multiLatchLocks,
      certifiedLocks: this.policy.certifiedLocks,
      insuredLengthInYears: this.policy.insuredLengthInYears,
      houseLastYearClaims: this.policy.houseLastYearClaims,
      houseLastTwoYearsClaims: this.policy.houseLastTwoYearsClaims,
      houseLastThreeYearsClaims: this.policy.houseLastThreeYearsClaims,
      houseLastTwentyYearsFloods: this.policy.houseLastTwentyYearsFloods,
      insuredPersonNumber: this.policy.insuredPersonNumber,
      clientType: this.policy.clientType,

      bussinesName: this.policy.bussinesName,
      nip: this.policy.nip,
      regon: this.policy.regon,

    }

    this.mainService.postPolicy(result).subscribe(car => {

    },
      (err: Error) => { console.log(err.message) })
    console.log(result);
  }

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


  arrChangeSecurity(event) {
    let index = this.policy.security.indexOf(event.target.value)
    if (index == -1) {
      this.policy.security.push(event.target.value);
    }
    else {
      this.policy.security.splice(index, 1);
    }
    console.log(this.policy.security);
  }
}
