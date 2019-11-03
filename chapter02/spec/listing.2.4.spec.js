"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var contact_1 = require("./contact");
describe('ContactClass tests', function () {
    var contact = null;
    beforeEach(function () {
        contact = new contact_1.default();
    });
    it('should have a valid constructor', function () {
        expect(contact).not.toBeNull();
    });
    it('should set name correctly through constructor', function () {
        contact = new contact_1.default('Liz');
        expect(contact.name).toEqual('Liz');
    });
    afterEach(function () {
        contact = null;
    });
});
