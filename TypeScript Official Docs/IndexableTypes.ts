interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];
let myStr: string = myArray[0]
console.log(myStr)

//Extend interface
// A number indexer will be convert into string first that is why the one that has number indexer
// has to be the subtype
interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}

interface NotOkay {
    [x: number]: Animal
    [x: string]: Dog
}

interface Okay {
    [x: number]: Dog;
    [x: string]: Animal;
}

//Error
interface NumberDictionary {
    [index: string]: number;
    lenght: number;
    name: string;
}

//Not Error
interface NumberOrStringDictionary {
    [index: string]: number | string;
    length: number;
    name: string;
}

//Using readonly for array interface
interface ReadonlyStringArray {
    readonly [index: number]: string;
}

let myArray2: ReadonlyStringArray = ["Alice", "Bob"]
myArray2[2] = "Mallory";