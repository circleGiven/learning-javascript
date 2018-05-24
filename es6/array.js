/**
 * File Name   : array
 *
 * Description :
 *
 * Developer   : circleGiven
 *
 * Date        : 2018. 5. 23.
 */


// copyWithin
const arr = [1,2,3,4,5,6];
// 첫번째 인자는 교체할 값 index
// 두번째 인자는 교체를 시작할 index
// 세번째 인자는 교체를 끝낼 index (없다면 초기 배열 크기만큼 계속 바꾼다)
arr.copyWithin(1, 0, 1);
console.log(arr);

// fill
// 첫번째 인자는 교체할 값
// 두번째 인자는 교체를 시작할 index
// 세번째 인자는 교체를 끝낼 index  (없으면 초기 배열 크기만큼 계속 바꾼다)
const arr2 = new Array(5).fill(1);
arr2.fill(4,1);
console.log(arr2);

const arr3 = [
    { id: 1, name: 'test1' },
    { id: 2, name: 'test2' },
    { id: 3, name: 'test3' },
];
// findIndex
// index를 반환한다 제일 많이 사용
console.log(arr3.findIndex(obj => obj.id === 1));

// find
// findIndex와 원리는 같으나 그 요소를 반환한다
// 이것도 쓰면 괜찮을것 같음
console.log(arr3.find(obj => obj.id === 2));


// this 사용
class Person {
    constructor(name) {
        this.name = name;
        this.id = Person.nextId++;
    }
}

Person.nextId = 0;
const jamie = new Person('jamie'),
    juliet = new Person('juliet'),
    peter = new Person('peter');
const arr4 = [jamie, juliet, peter];

console.log(arr4.find(function (p) {
    return p.id === this.id;
}, jamie));

// 조건만 만족하는지 확인하는 메서드
console.log(arr.some(x => x === 1)); // 있으면 true 없으면 false
console.log(arr3.some(o => o.id === 0));

// map and filter
const cards = [];
for (let suit of ['H', 'C', 'D', 'S']) {
    for (let value = 1; value <= 13; value++) {
        // 아래와 동일한 코드
        cards.push({ suit: suit, value: value });
        // cards.push({ suit, value });
    }
}
const suits = {
    H: '\u2665',
    C: '\u2663',
    D: '\u2666',
    S: '\u2660'
};
const values = {
    1: 'A',
    11: 'J',
    12: 'Q',
    13: 'K'
};

function initCardValues() {
    for (let i = 2; i <= 10; i++) {
        values[i] = i;
    }
}

function cardToString(c) {
    return values[c.value] + suits[c.suit];
}

initCardValues();
// 아래와 동일 한 코드
// console.log(cards.filter(c => c.value === 2).map(c => cardToString(c)));
console.log(cards.filter(c => c.value === 2).map(cardToString));
console.log(cards.filter(c => c.value === 10 && c.suit === 'H').map(cardToString));


// reduce
const arrReduce = [5,15,134,3,21];
// a 누적값, x는 현재 요소 값
console.log(arrReduce.reduce((a, x) => a += x, 0));
console.log(arrReduce.reduce((a, x) => a += x));
console.log(arrReduce.reduce((a, x) => {
    return a += x;
}));
console.log(arrReduce.reduce((a, x) => {
    return a + x;
}));

const words = ["BeachBall", "Rodeo", "Angel", "Producer", "Milli", "Idol", "Chocolate"];
const alphabetical = words.reduce((a, x) => {
    // if (!a[x[0]]) {
    //     a[x[0]] = [];
    // }
    // key : value
    // 누적된 배열의 a에 현재 요소의 첫번째 값이 없다면 해당 프로퍼티에 새로운 배열을 만든다
    !a[x[0]] && (a[x[0]] = []);
    a[x[0]].push(x);
    return a;
}, {});
console.log(alphabetical);

const data = [3.3, 5, 7.2, 12, 4, 6, 10.3];
const stats = data.reduce((a, x) => {
    a.N++;
    // 현재 요소 값에서 앞에서 구한 mean을 뺀 값
    let delta = x - a.mean;
    // mean 값에 위 값을 여태껏 계산한 수로 나눔
    a.mean += delta/a.N;

    a.M2 += delta * (x - a.mean);
    return a;
}, { N: 0, mean: 0, M2: 0});
console.log(stats);

// const longWords = words.reduce((a, w) => w.length > 6 ? a+" "+w : a, "").trim();
let longWords = words.reduce((a, w) => {
    // 현재 단어가 6자리보다 크면 반환할 문자열에 이어 붙임
    return w.length > 6 ? a+" "+w : a;
}, "").trim(); // trim을 쓰지 않으면 초기에 빈 문자열에 붙이기 때문에 앞에 공백이 생긴다
console.log(longWords);
// filter와 join을 이용
longWords = words.filter(x => x.length > 6).join(" ");
console.log(longWords);

// 삭제되거나 정의되지 않은 요소들은 콜백  함수를 호출하지 않는다
const undefinedArray = new Array(5);
console.log(undefinedArray.map((a) => a));