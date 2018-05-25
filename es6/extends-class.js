/**
 * File Name   : extends-class
 *
 * Description :
 *
 * Developer   : circleGiven
 *
 * Date        : 2018. 5. 25.
 */

class Vehicle {
    constructor() {
        this.passengers = [];
        console.log("Vehicle created");
    }

    addPassenger(p) {
        this.passengers.push(p);
    }
}

class Car extends Vehicle {
    constructor() {
        // 서브클래스에서는 이 super를 반드시 호출한다
        super();
        console.log("Car created");
    }

    deployAirbags() {
        console.log("BWOOSH!");
    }
}

const v = new Vehicle();
v.addPassenger("Frank");
v.addPassenger("Judy");
v.addPassenger("Miki");
v.addPassenger("Yuki");
console.log(v.passengers);

const c = new Car();
c.addPassenger("Frank");
c.addPassenger("Judy");
c.addPassenger("Miki");
c.addPassenger("Yuki");
console.log(c.passengers);
// v.deployAirbags(); // error!
c.deployAirbags();

