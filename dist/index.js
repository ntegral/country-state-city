"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const countries = require("./data/countries.json");
const states = require("./data/states.json");
module.exports = {
    getAllCountries() {
        return countries;
    },
    getCountryById(id) {
        return countries.find(c => c.id === id);
    },
    getCountryByCode(code) {
        if (code.length === 3) {
            return countries.find(c => c.iso3 === code);
        }
        else {
            return countries.find(c => c.iso2 === code);
        }
    },
    getStatesByCountry(countryId) {
        let result = states.filter(s => s.country_id === countryId);
        return result.sort(compare);
    }
};
function compare(a, b) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
}
