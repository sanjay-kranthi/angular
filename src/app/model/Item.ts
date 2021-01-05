export class Item {
  _id: string;
  name: string;
  accountnumber: string;
  ifsc: string;
  amount: string;

  constructor(id: string, name: string, accountnumber: string, ifsc: string, amount: string) {
    this._id = id;
    this.name = name;
    this.accountnumber = accountnumber;
    this.ifsc = ifsc;
    this.amount = amount;
  }
}
