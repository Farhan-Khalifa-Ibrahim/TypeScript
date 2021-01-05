//Type Aliases
type Age = number

type Person = {
    name: string;
    age: Age;
}

let age: Age = 55

let driver: Person = {
    name: 'James May',
    age: age
}

type Color = 'red'
let x = Math.random() < .5
if (x) {
    type Color = 'blue' // This shadows the Color declared above.
    let b: Color = 'blue'
} else {
    let c: Color = 'red'
}

