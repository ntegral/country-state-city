import countries = require("./data/countries.json");
import states = require("./data/states.json");
import { ICountry, IState } from "./interfaces/csc.interface";

module.exports = {

    getAllCountries(): ICountry[] {
        return countries as ICountry[];
    },
    getCountryById(id: number): ICountry {
        return countries.find(c => c.id === id) as ICountry;
    },
    getCountryByCode(code: string): ICountry {
        if (code.length === 3) {
            return countries.find(c => c.iso3 === code) as ICountry;
        } else {
            return countries.find(c => c.iso2 === code) as ICountry;
        } 
    },
    getStatesByCountry(countryId:number): IState[] {
        let result = states.filter(s => s.country_id === countryId) as IState[];
        return result.sort(compare);
    }
}

function compare(a:any,b:any) {
    if(a.name < b.name) {
        return -1;
    }
    if(a.name > b.name) {
        return 1;
    }
    return 0;
}