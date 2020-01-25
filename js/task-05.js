// ------------------HW-5__task--05

class Car {

    static getSpecs(car) {
        return console.log(car)
    }

    constructor({ speed = 0, price = 0, maxSpeed = 0, isOn = false, distance = 0 }) {
        this.speed = speed;
        this.price = price;
        this.maxSpeed = maxSpeed;
        this.isOn = isOn;
        this.distance = distance;

    }

    get Price() {
        return this.price
    }

    set Price(price) {
        this.price = price
    }

    turnOn(isON) {
        this.isOn = true;
    }

    turnOff(isOff) {
        this.isOn = false;
        this.speed = 0;
    }

    accelerate(value) {
        if (this.speed + value <= this.maxSpeed) {
            return this.speed += value
        } else this.speed = this.maxSpeed
    }

    decelerate(value) {
        if (this.speed - value >= 0) {
            return this.speed -= value
        }
    }

    drive(hours) {
        if (this.isOn === true) {
            return this.distance = this.distance + (hours * this.speed)
        }
    }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(2200);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 30, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000