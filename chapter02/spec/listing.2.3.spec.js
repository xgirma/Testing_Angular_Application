"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var contact_1 = require("./contact");
describe('Contact class tests', function () {
    var contact = null;
    beforeEach(function () {
        contact = new contact_1.default();
    });
    it('should have a valid constuctor', function () {
        expect(contact).not.toBeNull();
    });
    afterEach(function () {
        contact = null;
    });
});
