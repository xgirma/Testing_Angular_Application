# Chapter 1: Typescript

TypeScript is a superset of JavaScript version ES6.

Simple TypeScript class example

```javascript
export class Cat {
  private _name: string = '';

  constructor(name? : string) {
    this._name = name;
  }

  get name() : string {
    return this._name;
  }

  set name(name : string) {
    this._name = name;
  }

  toString() : string {
    return `This cat's name is ${this._name}!`;
  }
}

const cat = new Cat('Nicky');
```

**_name** is a private instance variable.

The **?** makes parameter optional.

The **string** types are added to specify return, variable, and parameter types.

# Run

    npm run prepare
    
    npm run build
    
    npm run test