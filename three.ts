class Students {

    name: string;
    age: number

    constructor(name: string, age: number) {

        this.name = name
        this.age = age

    }


    introduce() {

        console.log(`hi i am of name ${this.name} with age ${this.age}`)
    }

}

const st = new Students("abhi", 30)
st.introduce();
console.log(st.name)