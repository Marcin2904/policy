import { Address } from './address';

export interface Insurer {

    name: string;
    surname: string;
    familyName: string;
    pesel: string;
    phoneNumber: string;
    email: string;
    maritalStatus: string;
    homeAddress: Address;
    correspondenceAddress: Address;
    profession: string;
}