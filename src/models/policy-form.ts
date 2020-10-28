import { Business } from './business';
import { Insurer } from './insurer';


export interface PolicyFormClass {


    agreemnet1: string;
    agreemnet2: string;
    agreemnet3: string;
    agreemnet4: string;
    agreemnet5: string;
    startDate: string;
    scope: [];


    security: [];
    multiLatchLocks: number;
    certifiedLocks: number;
    insuredLengthInYears: number;
    houseLastYearClaims: number;
    houseLastTwoYearsClaims: number;
    houseLastThreeYearsClaims: number;
    houseLastTwentyYearsFloods: number;
    insuredPersonNumber: number;
    clientType: string;

    business: Business;
 
    insuredList: Array<Insurer>;

    agreementProcessingPersonalData: boolean;
    
}