import { Country } from 'src/types/country';
import { Role } from 'src/types/role';
import { CommonAccount } from './commonAccount';
export declare class Account extends CommonAccount {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    password: string;
    country: Country;
    roles: Role[];
    formatEmail(): void;
}