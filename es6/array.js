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

function cardToString(c) {
    for (let i = 2; i <= 10; i++) {
        values[i] = i;
    }
    return values[c.value] + suits[c.suit];
}

console.log(cards.filter(c => c.value === 2).map(cardToString));
console.log(cards.filter(c => c.value === 10 && c.suit === 'H').map(cardToString));