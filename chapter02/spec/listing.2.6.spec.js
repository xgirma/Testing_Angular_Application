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
    it('should get and set id correctly', function () {
        contact.id = 1;
        expect(contact.id).toEqual(1);
    });
    it('should get and set name correctly', function () {
        contact.name = 'Liz';
        expect(contact.name).toEqual('Liz');
    });
    it('should get and set email correctly', function () {
        contact.email = 'liz@sample.com';
        expect(contact.email).toEqual('liz@sample.com');
    });
    it('should get and set number correctly', function () {
        contact.number = '1234567890';
        expect(contact.number).toEqual('1234567890');
    });
    it('should get and set country correctly', function () {
        contact.country = 'United States';
        expect(contact.country).toEqual('United States');
    });
    it('should get and set favorite correctly', function () {
        contact.favorite = true;
        expect(contact.favorite).toEqual(true);
    });
    afterEach(function () {
        contact = null;
    });
});
