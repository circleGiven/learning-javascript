const moment = require('moment-timezone');

// toDate는 moment 객체를 Date 객체로 변환
const d = moment.tz([2018, 5, 13], 'Asia/Seoul').toDate();
console.log(d);

// const before = {d: new Date()};
// console.log(before.d instanceof Date);
// const json = JSON.stringify(before);
// const after = JSON.parse(json);
// // JSON에서 날짜는 string이 된다
// console.log(after.d instanceof Date);
// console.log(typeof after.d);
// // 다시 Date로 복구
// after.d = new Date(after.d);
// console.log(after.d instanceof Date);

// 차라리 valueOf를 이용해 숫자로 만듬
const before = {d: new Date().valueOf()};
console.log(typeof before.d);
const json = JSON.stringify(before);
const after = JSON.parse(json);
console.log(typeof after.d);

const date = new Date();
console.log(date);
console.log(date.toLocaleDateString());
console.log(date.toLocaleString());
console.log(date.toLocaleTimeString());
console.log(date.toTimeString());
console.log(date.toUTCString());

console.log(moment(date).format('YYYY-MM-DD'));
console.log(moment(date).format('YYYY-MM-DD HH:mm'));
console.log(moment(date).format('YYYY-MM-DD HH:mm Z'));
console.log(moment(date).format('h:mm a'));

// 현재
let m = moment();
// 3일뒤
console.log(m.add(3, 'days'));
// 2년전
console.log(m.subtract(2, 'years'));
// 리셋
m = moment();
// 올해 1월 1일
console.log(m.startOf('years'));
// 올해의 1월 마지막
console.log(m.endOf('month'));

// moment chaining
m = moment()
    .add(10, 'hours')
    .subtract(3, 'days')
    .endOf('month');
console.log(m); // 현재기준 3일전으로 부터 10시간 뒤인 달의 마지막


// 상대적 날짜 fromNow
console.log(moment().subtract(10, 'seconds').fromNow());
console.log(moment().subtract(44, 'seconds').fromNow());
console.log(moment().subtract(45, 'seconds').fromNow());
console.log(moment().subtract(5, 'minutes').fromNow());