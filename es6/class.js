/**
 * File Name   : class
 *
 * Description :
 *
 * Developer   : circleGiven
 *
 * Date        : 2018. 5. 25.
 */


class Car {
    // 정적 메서드
    static getNextVin() {
        return Car.nextVin++; // this.nextVin++ 도 되지만, 이것은 정적메서드라는것을 표기하기 위해 Car.nextVin++
    }

    // 생성자
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this._userGears = ['P','N','R','D'];
        this._userGear = this._userGears[0];
        this.vin = Car.getNextVin();
    }

    static areSimilar(car1, car2) {
        return car1.make === car2.make && car1.model === car2.model;
    }
    static areSame(car1, car2) {
        return car1.vin === car2.vin;
    }



    get userGear() {
        return this._userGear;
    }
    set userGear(value) {
        // 입력받은 기어가 목록에 없다면 error
        if (this._userGears.indexOf(value) < 0) {
            throw new Error(`Invalid gear: ${value}`);
        }
        this._userGear = value;
    }

    shift(gear) {
        this.userGear = gear;
    }
}


//
const car1 = new Car("Tesla", "Model S");
// car1이 Car의 인스턴스인지 검사
// console.log(car1 instanceof Car);
// 이렇게 접근해서는 객체지향적 관점에서는 안된다
car1._userGear = 'D';
// console.log(car1.userGear);
// 오로지 메서드로만 _userGear를 변경하여야 한다
car1.shift('D');
// console.log(car1.userGear);


// WeakMap을 사용한 구현
const Car2 = (function() {
    const carProps = new WeakMap();

    class Car {
        // 생성자
        constructor(make, model) {
            this.make = make;
            this.model = model;
            this._userGears = ['P','N','R','D'];
            carProps.set(this, {_userGear: this._userGears[0]});
        }

        get userGear() {
            return carProps.get(this)._userGear;
        }
        set userGear(value) {
            // 입력받은 기어가 목록에 없다면 error
            if (this._userGears.indexOf(value) < 0) {
                throw new Error(`Invalid gear: ${value}`);
            }
            carProps.get(this)._userGear = value;
            console.log(carProps);
            console.log(carProps.get(this));
        }

        shift(gear) {
            this.userGear = gear;
        }
    }
    return Car;
})();


const car2 = new Car2("Mazda", "31");
// car2이 Car2의 인스턴스인지 검사
console.log(car2 instanceof Car2);
// 이렇게 접근해서는 객체지향적 관점에서는 안된다
car2.userGear = 'P';
// 더이상 _userGear에 접근할 수 없다
car2._userGear = 'D';
console.log(car2.userGear);


// es5에서의 클래스 구현
function Car3(make, model) {
    this.make = make;
    this.model = model;
    this._userGears = ['P','N','R','D'];
    this._userGear = this._userGears[0];
}

// 결국 class도 함수일 뿐이다
class Es6Car {
}
function Es5Car() {
}
console.log(typeof Es6Car);
console.log(typeof Es5Car);

// prototype
const car3 = new Car();
const car4 = new Car();
console.log(car3);
// car3의 shift는 Car의 프로토타입 메서드 이다
console.log(car3.shift === Car.prototype.shift);
car3.userGear = 'D';
console.log(car3.userGear);
console.log(car3.shift === car4.shift);
// car3에 shift에 새로운 함수를 할당
car3.shift = function(gear) {
    this.userGear = gear.toUpperCase();
};
// 기존 Car 클래스에 있는 shift와 car3 shift가 다르다
console.log(car3.shift === Car.prototype.shift);
console.log(car3.shift === car4.shift);


// 정적메서드를 이용
// 초기화
Car.nextVin = 0;
const sCar1 = new Car("Tesla", "Model S");
const sCar2 = new Car("NISSAN", "Model N");
const sCar3 = new Car("NISSAN", "Model N");
console.log(sCar1.vin);
console.log(sCar2.vin);
console.log(sCar3.vin);

console.log(Car.areSame(sCar1, sCar2));
console.log(Car.areSame(sCar2, sCar3));
console.log(Car.areSimilar(sCar1, sCar2));
console.log(Car.areSimilar(sCar2, sCar3));