function multiply(a:number,b:number):number{

    return a*b;
}

console.log(multiply(10,12));



// with const

const val=function multiply(a:number,b:number):number{

    return a*b;
}
console.log(val(10,12));
console.log(val(2,3))


// with arrow function not used function word
const val2= (a:number,b:number):number=>{

    return a*b;
}

// in line arrow function

const val3=((x:number,y:number):number => x*y) (5,4);

console.log(val3)



//

const val4 = ((a: number, b: number): number =>a+b)(5, 4);

console.log(val4);



const today = new Date();

const dates = {
  day: today.getDate(),
  month: today.getMonth(),
  year: today.getFullYear(),
  name1:"test",
  domain:"@test.com",
  random:Date.now,



  englishDate: function (): string {
    return `${this.day}/${this.month}/${this.year}`;
  },

  americanDate: function (): string {
    return `${this.year}/${this.month}/${this.day}`;
  },

  email: function (): string {
    return `${this.name1}${this.random()}${this.domain}`;
  }
};

console.log("English Date:", dates.englishDate());
console.log("American Date:", dates.americanDate());
console.log("Generated Email:", dates.email());