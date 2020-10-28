import { Address } from 'cluster';

export interface PropertyInfo {

        houseOwnership: string;
        rentedPremise: boolean;
        businessActivity: boolean;
        cession: boolean;
        underConstruction: boolean;
        peopleLivingNumber: number;
        underagePersonNumber: number;
        permanentlyInhabited: boolean;
        wallsType: string;
        address: Address;
        floorType: string;
}