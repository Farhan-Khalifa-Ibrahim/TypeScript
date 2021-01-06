// interface ClockConstructor {
//     new(hour: number, minute: number);
// }

// class Clock implements ClockConstructor {
//     currentTime: Date;
//     constructor(h: number, m: number) { }
// }

//How to make the clock correctly
interface ClockConstructor2 {
    new(hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    tick(): void;
}

function createClock(ctor: ClockConstructor2,
    hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute)
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep")
    }
}

class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}
let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);