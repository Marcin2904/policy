import { Address } from 'cluster';
import { CorrespondenceAddress } from './correspondence-adddress';


export interface Insurer {

    name: string;
    surname: string;
    familyName: string;
    pesel: string;
    phoneNumber: string;
    email: string;
    maritalStatus: string;
    homeAddress: Address;
    correspondenceAddress: CorrespondenceAddress;
    profession: string;
}