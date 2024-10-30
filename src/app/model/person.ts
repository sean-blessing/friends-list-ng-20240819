export class Person {
  name: string;
  address: string;
  phone: string;
  email: string;

  constructor(
    name: string = '',
    address: string = '',
    phone: string = '',
    email: string = ''
  ) {
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.email = email;
  }
}
