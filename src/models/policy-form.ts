import { Business } from './business';
import { Insurer } from './insurer';
import { Property } from './property';
import { PropertyInfo } from './property-info';
import { Security } from './security';


export interface PolicyFormClass {


    agreemnet1: string;
    agreemnet2: string;
    agreemnet3: string;
    agreemnet4: string;
    agreemnet5: string;
    startDate: string;
    scope: [];


    street: string;
    houseNumber: string;
    flatNumber: string;
    postcode: string;
    city: string;
    floorType: string;
    property: Property;
    propertyInfo: PropertyInfo;
    security: Security;

    agreementProcessingPersonalData: ""

    
    
}