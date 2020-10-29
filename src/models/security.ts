import { BusinessComponent } from 'src/app/business/business.component';
import { Business } from './business';

export interface Security {

    securityList: [];
    multiLatchLocks: null;
    certifiedLocks: null;
    insuredLengthInYears: null;
    houseLastYearClaims: null;
    houseLastTwoYearsClaims: null;
    houseLastThreeYearsClaims: null;
    houseLastTwentyYearsFloods: null;
    insuredPersonNumber: null;
    clientType: "";
    business: Business;
}