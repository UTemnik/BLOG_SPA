//1 
type typeConcat = (a: string, b: string) => string;
const concat: typeConcat = (a, b) => a + b;

let result = concat('Hello ', 'World') // -> Hello World;

//2

interface IInterface {
    howIDoIt: string,
    simeArray: [string, string, number],
    withData: [{ howIDoIt: string, simeArray: [string, number] }]
}

const MyHometask: IInterface = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }]
}

//3 

interface MyArray<T> {
    [N: number]: T;

    reduce(fn: (accumulator: T, value: T) => T): T;
}

const ArrayValue: MyArray<number> = [1, 2, 3];

const initialValue = 0;
let result5 = [1, 2, 3].reduce((accumulator, value) => accumulator + value, initialValue); // -> 6 

//4

interface IHomeTask {
    data: string;
    numbericData: number;
    date: Date;
    externalData: {
        basis: number;
        value: string;
    }
}

type TMyPartial<T> = {
    [N in keyof T] ?: T[N] extends Object ? TMyPartial<T[N]> : T[N]
}

const homeTask1: TMyPartial<IHomeTask> = {
    data: 'string',
    numbericData: 57,
    externalData: {
        basis: 55,
        value: 'hjj'
    }
}

const homeTask2: TMyPartial<IHomeTask> = {
    externalData: {
        value: 'win'
    }
}




