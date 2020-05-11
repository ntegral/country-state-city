import countries = require("./data/countries.json");
import states = require("./data/states.json");
import cities = require("./data/cities.json");
import { ICountry, IState, ICity } from "./interfaces/csc.interface";
export { ICountry, IState, ICity };

export class csc {

    static getAllCountries(): ICountry[] {
        return countries as ICountry[];
    }

    static getCountryById(id: number): ICountry {
        return countries.find(c => c.id === id) as ICountry;
    }

    static getCountryByCode(code: string): ICountry {
        if (code.length === 3) {
            return countries.find(c => c.iso3 === code) as ICountry;
        } else {
            return countries.find(c => c.iso2 === code) as ICountry;
        } 
    }

    static getStatesByCountry(countryId:number): IState[] {
        let result = states.filter(s => s.country_id === countryId) as IState[];
        return result.sort(this.compare);
    }

    static getCitiesByState(stateId:number): ICity[] {
        let result = cities.filter(c => c.state_id === stateId) as ICity[];
        return result.sort(this.compare);
    }

    private static compare(a:any,b:any) {
        if(a.name < b.name) {
            return -1;
        }
        if(a.name > b.name) {
            return 1;
        }
        return 0;
    }
}
