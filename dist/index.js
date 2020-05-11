"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const countries = require("./data/countries.json");
const states = require("./data/states.json");
const cities = require("./data/cities.json");
class csc {
    static getAllCountries() {
        return countries;
    }
    static getCountryById(id) {
        return countries.find(c => c.id === id);
    }
    static getCountryByCode(code) {
        if (code.length === 3) {
            return countries.find(c => c.iso3 === code);
        }
        else {
            return countries.find(c => c.iso2 === code);
        }
    }
    static getStatesByCountry(countryId) {
        let result = states.filter(s => s.country_id === countryId);
        return result.sort(this.compare);
    }
    static getCitiesByState(stateId) {
        let result = cities.filter(c => c.state_id === stateId);
        return result.sort(this.compare);
    }
    static compare(a, b) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    }
}
exports.csc = csc;
