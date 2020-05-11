import { ICountry, IState } from "./interfaces/csc.interface";
export { ICountry, IState } from "./interfaces/csc.interface";
declare let csc: {
    getAllCountries(): ICountry[];
    getCountryById(id: number): ICountry;
    getCountryByCode(code: string): ICountry;
    getStatesByCountry(countryId: number): IState[];
};
export default csc;
