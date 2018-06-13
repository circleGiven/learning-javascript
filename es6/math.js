// 소숫점 자리 지정 (반올림)
const x = 19.51;
console.log(x.toFixed(3));
console.log(x.toFixed(2));
console.log(x.toFixed(1));
console.log(x.toFixed(0));

// 지수 표기법 (반올림)
const a = 3800.5;
console.log(a.toExponential(4));
console.log(a.toExponential(3));
console.log(a.toExponential(2));
console.log(a.toExponential(1));
console.log(a.toExponential(0));

// 소수점과 관계없이 숫자로 몇개 표현 (반올림)
const b = 15.335;
console.log(b.toPrecision(5));
console.log(b.toPrecision(4));
console.log(b.toPrecision(3));
console.log(b.toPrecision(2));
console.log(b.toPrecision(1));
// console.log(b.toPrecision(0)); // error


// 진수
const c = 12;
console.log(c.toString()); // 10진수
console.log(c.toString(10)); // 10진수
console.log(c.toString(16)); // 16진수
console.log(c.toString(8)); // 8진수
console.log(c.toString(2)); // 2진수


// 상수
console.log(Math.E); // 자연로그 밑수
console.log(Math.PI); // 원주율
console.log(Math.LN2); // 2 자연로그
console.log(Math.LN10); // 10 자연로그
console.log(Math.LOG2E); // Math.E의 밑수가 2인 로그
console.log(Math.LOG10E); // Math.E의 밑수가 10인 로그 (상용로그)
console.log(Math.SQRT1_2); // 1/2의 제곱근
console.log(Math.SQRT2); // 2의 제곱근


// 대수함수
console.log(Math.pow(2,3)); // 2의 3제곱
console.log(Math.sqrt(16)); // 16의 제곱근
console.log(Math.cbrt(8)); // 8 세제곱근
console.log(Math.exp(1)); // e의 1승 === pow(Math.E, 1)
console.log(Math.expm1(1)); // e의 1승의 -1 === exp(1)-1
console.log(Math.hypot(3,4)); // 3과 4의 제곱의 합의 제곱근


// 로그함수
console.log(Math.log(17.5)); // 자연 로그
console.log(Math.log(Math.E)); // 자연 로그
console.log(Math.log10(16.2)); // 16.2의 상용로그 === Math.log(16.2)/Math.log(10)
console.log(Math.log2(24)); // 24의 밑수가 2인 로그 === Math.log(24)/Math.log(2)
console.log(Math.log1p(17.5)); // 1 + 17.5의 자연로그 === Math.log(1+17.5)


// 기타 함수
console.log(Math.abs(-5.5)); // -5.5의 절댓값
console.log(Math.sign(-10.2)); // -10.2의 부호 (음수면 -1, 양수면 1, 0은 0)
console.log(Math.ceil(2.2)); // 2.2의 올림
console.log(Math.floor(2.9)); // 2.9의 내림
console.log(Math.trunc(2.9)); // 2.9의 버림
console.log(Math.round(2.9)); // 2.9의 반올림
console.log(Math.min(2.9, 2, 5)); // 숫자중 최솟값
console.log(Math.max(2.9, 2, 5)); // 숫자중 최댓값


// 난수
console.log(Math.random()); // 0이상 1미만
console.log(1 + (9) * Math.random()); // 1이상 10미만
console.log(1 + Math.floor((9) * Math.random())); // 1이상 10미만의 정수
console.log(1 + Math.floor((10) * Math.random())); // 1이상 10이하의 정수


// 삼각함수
console.log(Math.sin(Math.PI)); // PI의 사인
console.log(Math.cos(Math.PI)); // PI의 코사인
console.log(Math.tan(Math.PI)); // PI의 탄젠트
console.log(Math.asin(Math.PI)); // PI의 아크사인 (결과는 라디안)
console.log(Math.acos(Math.PI)); // PI의 아크코사인 (결과는 라디안)
console.log(Math.atan(Math.PI)); // PI의 아크탄젠트 (결과는 라디안)
console.log(Math.atan2(2,1)); // x축에서 점(1,2) 까지의 시계 반대방향 각도를 라디안으로 나타낸 값

// 각도 -> 라디안
function deg2rad(d) {
    return d/180*Math.PI;
}

// 라디안 -> 각도
function rad2deg(r) {
    return r/Math.PI*180;
}

console.log(deg2rad(34));
console.log(rad2deg(34));



// 쌍곡선 함수
Math.sinh(0); // 0의 하이퍼볼릭 사인
Math.cosh(0); // 0의 하이퍼볼릭 코사인
Math.tanh(0); // 0의 하이퍼볼릭 탄젠트
Math.asinh(0); // 0의 하이퍼볼릭 아크 사인
Math.acosh(0); // 0의 하이퍼볼릭 아크 코사인
Math.atanh(0); // 0의 하이퍼볼릭 아크 탄젠트