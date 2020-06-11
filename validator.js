'use strict';

/**
 * Validates JSON input
 *
 * Expect data format to be an array of objects, each with a site, siteDetails field
 */

const Validator = require('jsonschema').Validator;
const { dataSchema } = require('./schema');
const v = new Validator();

// Returns a new object containing arrays of valid & invalid objects
module.exports = (data) => {

    return data.reduce((out, row) => {
        v.validate(row, dataSchema).valid ? out.valid.push(row) : out.invalid.push(row);

        return out;
    }, { valid: [], invalid: [] });

};
