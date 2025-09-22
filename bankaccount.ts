class BankUser {
  public owner: string;
  private balance: number;
  protected accountType: string;

  constructor(owner: string, balance: number, accountType: string) {
    this.owner = owner;
    this.balance = balance;
    this.accountType = accountType;
  }

  protected deposit(amount: number) {
    this.balance += amount;
    console.log(`${amount} deposited successfully.`);
  }

  protected showBalance() {
    console.log(`The balance for ${this.owner} is ${this.balance}`);
  }
}


class privateuser extends BankUser {
  constructor(owner: string, balance: number, accountType: string) {
    super(owner, balance, accountType);
  }

  public usePremiumFeatures() {
    console.log(`Welcome, premium user: ${this.owner}`);
    this.deposit(500);         
    this.showBalance();        
  }
}

const user2 = new privateuser("Abhijit", 1000, "savings");
user2.usePremiumFeatures();     


