let c: {
    firstname: string;
    lastname: string;
} = {
    firstname: 'john',
    lastname: 'barrowman'
}

// class Person{
//    constructor(public firstname:string,public lastName:string){
//        this.firstname = firstname;
//        this.lastName = lastName;
//    }
// }

// let d = new Person('matt','smith')
// console.log(d.firstname)

let a: {
    b: number;
    c?: string
    [key: number]: boolean //Index Signature the key is either number or string
}

a = { b: 10, 10: true, 20: false } //OK
a = { 10: true } //Missing B

let user: { readonly firstName: string } = { firstName: 'abby' }
user.firstName // string
user.firstName =
    'abbey with an e' // Error TS2540: Cannot assign to 'firstName' because it
// is a read-only property.

