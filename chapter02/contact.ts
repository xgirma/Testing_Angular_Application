export default class ContactClass {
  private contactId: number;
  private contactName: string;
  private contactEmail: string;
  private contactNumber: string;
  private contactCountry: string;
  private contactFavourite: boolean;

  constructor(name?: string) {
    this.contactName = name;
  }

  get id(): number {
    return this.contactId;
  }

  set id(id: number)  {
    this.contactId = id;
  }

  get name(): string {
    return this.contactName;
  }

  set name(name: string) {
    this.contactName = name;
  }

  get email(): string {
    return this.contactEmail;
  }

  set email(email: string) {
    this.contactEmail = email;
  }

  get number(): string {
    return this.contactNumber;
  }

  set number(phoneNumber: string) {
    this.contactNumber = phoneNumber;
  }

  get country(): string {
    return this.contactCountry;
  }

  set country(country: string) {
    this.contactCountry = country;
  }

  set favorite(favorite: boolean) {
    this.contactFavourite = favorite;
  }

  get favorite(): boolean {
    return this.contactFavourite;
  }
}
