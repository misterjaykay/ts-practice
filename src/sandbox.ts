
// c?: optional
// c: number = 10 default
const add = (a: number, b: number, c: number|string = 10): void => {
    console.log(a + b);
    console.log(c);
}

add(1,5, 20);

const minus = (a: number, b: number): number => {
    return a - b;
}

let result = minus(10, 7);
console.log(result);

type StringOrNum = string | number;

const greetOne = (user: objWithname) => {
    console.log(`${user.name} says hello`)
}

let greet: (a: string, b: string) => void;
greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
}

let calc: (a: number, b: number, c: string) => number;
calc = (numOne: number, numTwo: number, action: string) => {
    if (action === "add") {
        return numOne + numTwo;
    } else {
        return numOne - numTwo;
    }
}

type objWithname = { name: string, age: number}

let logDetails: (obj: {name: string, age: number}) => void;
logDetails = (ninja: objWithname) => {
    console.log(`${ninja.name} is ${ninja.age} years old.`)
}
