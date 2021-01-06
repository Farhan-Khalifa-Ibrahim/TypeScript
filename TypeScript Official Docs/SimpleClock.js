var Clock = /** @class */ (function () {
    function Clock(h, m) {
    }
    Clock.prototype.tick = function () {
        console.log("beep beep");
    };
    return Clock;
}());
var clock = new Clock(12, 17);
clock.tick();
