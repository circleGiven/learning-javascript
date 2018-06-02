// *은 제너레이터 문법
function* rainbow() {
    // 제너레이터에서는 return 대신에 yield를 사용하여 제어권을 넘길 수 있다
    yield 'red';
    yield 'orange';
    yield 'yellow';
    yield 'blue';
    yield 'green';
    yield 'indigo';
}

const it = rainbow();

// 제너레이터는 이터레이터를 반환한다
for (let color of rainbow()) {
    console.log(color);
}


function* interrogate() {
    const name = yield "What is your name?";
    const color = yield "What is your favorite color?";
    // 제너레이터에서 return 은 done을 true 시킨다
    return `${name}'s favortie color is ${color}`;
}

const ig = interrogate();
console.log(ig.next());
console.log(ig.next('wonjune'));
console.log(ig.next('black'));

for(let l of interrogate()) {
    console.log(l);
}
// 위에서 return은 출력되지 않는다
// return은 중요한 값을 반환하는게 아닌 종료하는 목적이므로 되도록 사용하지 않는다