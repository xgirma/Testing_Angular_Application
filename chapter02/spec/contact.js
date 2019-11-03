"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ContactClass = /** @class */ (function () {
    function ContactClass(name) {
        this._name = name;
    }
    Object.defineProperty(ContactClass.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactClass.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactClass.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (email) {
            this._email = email;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactClass.prototype, "number", {
        get: function () {
            return this._number;
        },
        set: function (number) {
            this._number = number;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactClass.prototype, "country", {
        get: function () {
            return this._country;
        },
        set: function (country) {
            this._country = country;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactClass.prototype, "favorite", {
        get: function () {
            return this._favorite;
        },
        set: function (favorite) {
            this._favorite = favorite;
        },
        enumerable: true,
        configurable: true
    });
    return ContactClass;
}());
exports.default = ContactClass;
