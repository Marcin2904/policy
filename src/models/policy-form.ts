export interface PolicyFormClass {


    agreemnet1: string;
    agreemnet2: string;
    agreemnet3: string;
    agreemnet4: string;
    agreemnet5: string;
    name: string;
    surname: string;
    familyName: string;
    pesel: string;
    phoneNumber: string;
    email: string;
    maritalStatus: string;
    
    scope: string[];
    street: string;
    houseNumber: string;
    flatNumber: string;
    postcode: string;
    city: string;

    propertyType: string;
    yearOfConstruct: string;
    areaOfApartment: number;
    equipmentInsuranceSum: number;
    personalThingsInsuranceSum: number;
    wallsInsuranceSum: number;

    
    housePostcode: string;
    houseOwnership: string;
    rentedPremise: boolean;
    businessActivity: boolean;
    cession: boolean;
    peopleLivingNumber: number;
    underagePersonNumber: number;
    permanentlyInhabited: boolean;
    wallsType: string;

    security: string[];
    multiLatchLocks: number;
    certifiedLocks: number;
    insuredLengthInYears: number;
    houseLastYearClaims: number;
    houseLastTwoYearsClaims: number;
    houseLastThreeYearsClaims: number;
    houseLastTwentyYearsFloods: number;
    insuredPersonNumber: number;
    clientType: string;
}
  
// enum scope {
//     EQUIPMENT,
//     PERSONAL_THINGS,
//     WALLS,
//     BURGLARY,
//     OC_INSURANCE
// }
// enum security {
//     INTERCOM,
//     ALARM,
//     SECURITY_DOORS,
//     MONITORING,
//     SECURITY_WINDOWS,
//     SECURITY_AGENCY

// }
// enum maritalStatus {

//     SINGLE,
//     MARRIED,
//     DIVORCED,
//     WIDOW,
//     WIDOWER
// }
// enum PropertyType {
//     HOME,
//     APARTMENTT
// }
// enum houseOwnership {
//     OWNERSHIP,
//     COOPERATIVE_OWNERSHIP,
//     LENDING_AGREEMENT,
//     COOPERATIVE_TENANTS,
//     LEASE_AGREEMENT,
//     PERPETUAL_USE,
//     FOR_RENT
// }

// enum wallsType {
//     BRINCK,
//     WOODEN
// }