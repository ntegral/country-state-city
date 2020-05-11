import { ICountry, IState, ICity } from "./interfaces/csc.interface";
export { ICountry, IState, ICity };
export declare class csc {
    static getAllCountries(): ICountry[];
    static getCountryById(id: number): ICountry;
    static getCountryByCode(code: string): ICountry;
    static getStatesByCountry(countryId: number): IState[];
    static getCitiesByState(stateId: number): ICity[];
    private static compare;
}
