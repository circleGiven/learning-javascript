/**
 * File Name   : regex
 *
 * Description :
 *
 * Developer   : circleGiven
 *
 * Date        : 2018. 6. 20.
 */

const text1 = 'As I was going to Saint Ives';
text1.startsWith('As');
text1.endsWith('Ives');
text1.startsWith('going', 9);   // index 9 부터 시작
text1.endsWith('going', 14);    // index 14를 문자열의 끝으로 간주
text1.includes('going');
text1.includes('going', 10);    // index 10 부터 시작
text1.indexOf('going');
text1.indexOf('going', 10);     // index 10 부터 시작

// 리터럴
const reg1 = /going/;
// 생성자
const reg2 = new RegExp('going');

const re = /\w{3,}/ig;

// 문자열 메서드
console.log(text1.match(re));
console.log(text1.search(re));  // 위 조건에 만족하는 첫 index 값

// 정규식 메서드
console.log(re.exec(text1));
console.log(re.exec(text1));
console.log(re.exec(text1));
console.log(re.exec(text1));
console.log(re.exec(text1));    // null
console.log(re.exec(text1));    // 다시 reset
console.log(re.exec(text1));

console.log(re.test(text1));    // 정규식에 일치하는게 한개 이상 있다면 true


console.log(text1.replace(re, '***'));  // 문자열 교체
console.log(text1);


const html = 'HTML with <a href="/one">oneLink</a>, and some JavaScript <script src="stuff.js">';
console.log(html.match(/area|a|link|script|source/ig)); // 파이프(|)는 대체란 뜻

const beer99 = '99 bottles of beer on the wall take 1 down and pass it around -- 98 bottles of beer on the wall.';
// console.log(beer99.match(/[0-9]/g));
// console.log(beer99.match(/[\-0-9a-z.]/ig));
// console.log(beer99.match(/[.a-z0-9-]/ig));  // 하이픈(-)은 마지막일때는 이스케이프 하지 않아도된다
// console.log(beer99.match(/[^\-0-9a-z]/ig)); // 캐럿(^)은 제외를 의미

// console.log(beer99.match(/\d/ig));  // 숫자만 === [0-9]
// console.log(beer99.match(/\D/ig));  // 숫자를 제외하고 === [^0-9]
// console.log(beer99.match(/\s/ig));  // 탭 스페이스 세로탭 줄바꿈 === [\t\v\n\r]
// console.log(beer99.match(/\S/ig));  // 탭 스페이스 세로탭 줄바꿈을 제외하고 === [^\t\v\n\r]
// console.log(beer99.match(/\w/ig));  // 문자와 언더바를 찾음 === [a-zA-Z_]

const stuff =
    'hight:    9\n' +
    'medium:   5\n' +
    'low:      2\n';
console.log(stuff.match(/:\s*[0-9]/g));

const field = '      something    ';
console.log(/\S/.test(field));  // 공백이 아닌 글자가 있는지 확인


// 반복 메타문자
// console.log(beer99.match(/[0-9]+/));    // + : 연속해서 있는지
// console.log(beer99.match(/\d{2}/));     // 숫자가 {}개 있는지
// console.log(beer99.match(/\d{2,}/));    // 숫자가 최소 {}개 있는지
// console.log(beer99.match(/\d{2,4}/));   // 숫자가 {}개이상 {}개 이하 있는지
// console.log(beer99.match(/[a-z]\d?/i)); // 글자가 있고 다음에 숫자가 없거나 한개만 있는경우(?)
// console.log(beer99.match(/[a-z]\d*/i)); // 글자가 있고 다음에 숫자가 없거나 있는경우(*)
// console.log(beer99.match(/[a-z]\d+/i)); // 글자가 있고 다음에 숫자가 하나이상 있는경우(*)


const info = 'Address: 333 Mian St., Anywhere, NY, 55532. Phone: 555-5555-5555.';
console.log(info.match(/\d{5}.*/)); // 일반 마침표는 줄바꿈문자를 제외한 모든 문자를 찾음

const equation = '(2 + 3.5) * 7';
console.log(equation.match(/\(\d \+ \d\.\d\) \* \d/));  // 이스케이프를 이용하요 마침표를 찾음

// 마침표 : 줄바꿈을 제외한 모든 문자
// \s\S : 줄바꿈을 포함한 모든 문자


// 그룹
const groupText = 'Visit oreilly.com today!';
console.log(groupText.match(/[a-z]+(?:\.com|\.org|\.edu)/i));   // 켭처하지 않는 그룹

const html2 = '<link rel="stylesheet" href="http://insecure.com/stuff.css">\n' +
    '<link rel="stylesheet" href="https://insecure.com/securestuff.css">\n'  +
    '<link rel="stylesheet" href="//anything.com/flexible.css">' ;
console.log(html2.match(/(?:https?)?\/\/[a-z][a-z0-9-]+[a-z0-9]+/ig));  //(?:https?)? 는 빈문자열 http https 세가지 패턴에 유효함

// 소극적 참조
const html3 = '<i>greedy</i> and <i>lazy</i> matching.';
console.log(html3.replace(/<i>(.*?)<\/i>/ig, '<strong>$1</strong>'));


const promo = 'Opening for XAAX is the dynamic GOOG! At the box office now RQQQ!';
console.log(promo.match(/([A-Z])([A-Z])\2\1/g));