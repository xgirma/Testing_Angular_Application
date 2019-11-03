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
    it('should set name properly through constructor', function () {
        contact = new contact_1.default('Liz');
        expect(contact.name).toEqual('Liz');
    });
    it('should get and set id correctly', function () {
        contact.id = 1;
        expect(contact.id).toEqual(1);
    });
    it('should get and set name correctly', function () {
        contact.name = 'Liz';
        expect(contact.name).toEqual('Liz');
    });
    afterEach(function () {
        contact = null;
    });
});
