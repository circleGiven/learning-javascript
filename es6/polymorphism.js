/**
 * File Name   : polymorphism
 *
 * Description : 다형성
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

class Motorcycle extends Vehicle {}

const c = new Car();
const m = new Motorcycle();
console.log(c instanceof Car);
console.log(c instanceof Vehicle);
console.log(m instanceof Car);
console.log(m instanceof Vehicle);
console.log(m instanceof Motorcycle);

// 보험 가입 클래스
class InsurancePolicy {}
// 믹스인 (기능을 필요한 만큼만 섞어둠)
function makeInsurable(o) {
    o.addInsurancePolicy = function(p) {
        this.insurancePolicy = p;
    };
    o.getInsurancePolicy = function() {
        return this.insurancePolicy;
    };
    o.isInsured = function() {
        return !!this.insurancePolicy;
    };
}

// 자동차를 추상화한 개념(Car)를 가입할 수 없다
// makeInsurable(Car);
// const car1 = new Car();
// car1.addInsurancePolicy(new InsurancePolicy()); // error!

const car1 = new Car();
makeInsurable(car1);
car1.addInsurancePolicy(new InsurancePolicy());

makeInsurable(Car.prototype);
const car2 = new Car();
car2.addInsurancePolicy(new InsurancePolicy());


// symbol을 이용한 믹스인 구현
// 심볼은 항상 고유하므로 믹스인이 Car클래스의 기능과 충돌할 가능성이 없는 특징을 이용
class InsurancePolicy2 {}
const ADD_POLICY = Symbol();
const GET_POLICY = Symbol();
const IS_INSURED = Symbol();
const _POLICY = Symbol();
function makeInsurable2(o) {
    o[ADD_POLICY] = function(p) {
        this[_POLICY] = p;
    };
    o[GET_POLICY] = function() {
        return this[_POLICY];
    };
    o[IS_INSURED] = function() {
      return !!this[_POLICY];
    };
}
