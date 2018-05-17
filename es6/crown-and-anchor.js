/**
 * File Name   : crown-and-anchor
 *
 * Description : 4장 제어문에 나오는 크라운 앤 앵커 게임
 *
 * Developer   : circleGiven
 *
 * Date        : 2018. 5. 17.
 */

/**
 * role:
 * 시작 판돈은 50
 * 게임 참가자는 돈이없거나 100 초과하여 가지고 있는 경우 게임을 종료한다
 * 참가자는 먼저 무작위 금액을 집어 꺼낸다
 * 참가자는 무작위 그림에 무작위 금액을 건다 (꺼낸 금액을 다 쓸때까지)
 * 단, 꺼낸 금액이 7인 경우 하트 그림에 모든 돈을 건다
 * 주사위를 굴린다
 * 주사위에 나온 그림과 참가자가 건 그림이 일치한다면 해당 금액을 딴다
 * 중복으로 그림이 나온경우 그 수 만큼 배수로 딴다
 */



/**
 * m이상 n 이하의 무작위 정수를 반환
 * @param m
 * @param n
 * @returns {*}
 */
function rand(m, n) {
    return m + Math.floor((n - m + 1) * Math.random());
}

/**
 * 여섯가지 도형 중 하나를 무작위로 반환
 * @returns {string}
 */
function randFace() {
    return ["crown", "anchor", "heart", "spade", "club", "diamond"][rand(0,5)];
}

// 현재 가지고 있는 돈
let funds = 50;
// 현재 라운드
let round = 0;


// 가지고있는 돈이 1보다 크고 100보다 작다면 게임을 할 수 있다
while(funds > 1 && funds < 100) {
    // 라운드 시작
    round++;
    console.log(`round ${round}:`);
    console.log(`\t현재 가지고 있는 금액: ${funds}`);
    // 돈을 건다
    const bets = {
        crown: 0,
        anchor: 0,
        heart: 0,
        spade: 0,
        club: 0,
        diamond: 0
    };
    // 현재 걸 돈
    let totalBet = rand(1, funds);
    console.log(`\t꺼낸 금액: ${totalBet}`);
    // 만약 꺼낸 돈이 7이면
    if (totalBet === 7) {
        console.log('\n\t요시! 하트에 올인이다!\n');
        // 올인
        totalBet = funds;
        // 그리고 하트에 모든것을 검
        bets.heart = totalBet;
    } else {
        // 7이 아니라면 무작위로 도형에 배팅
        // 나누기 위한 금액 설정
        let remaining = totalBet;
        do {
            // 배팅할 금액 설정
            let bet = rand(1, remaining);
            // 무작위로 배팅할 곳을 찾음
            let face = randFace();
            // 도형에 배팅
            bets[face] += + bet;
            // 배팅한 금액을 제거
            remaining -= bet;
        } while (remaining > 0)
    }
    // 현재 가지고 있는 돈에서 꺼낸 금액 제거
    funds -= totalBet;
    console.log('\t배팅: ' +  Object.keys(bets).map((face) => {
            return `${face}: ${bets[face]}`;
        }).join(' | ') + ` (total: ${totalBet})`);
    // 주사위를 굴린다
    const result = [];
    for(let i=0; i<3; i++) {
        result.push(randFace());
    }
    console.log(`\t주사위에서 나온 그림: ${result.toString()}`);
    // 해당 라운드에서 딴 금액
    let winnings = 0;
    for(let i=0; i<result.length; i++) {
        // 주사위에서 나온 그림
        let face = result[i];
        // 주사위에서 나온 그림에 내가 건 돈이 있는 경우 건 만큼 획득
        bets[face] > 0 && (winnings += bets[face]);
    }
    // 수중에 있는돈에 딴 금액 추가
    funds += winnings;
    console.log(`\t라운드에서 딴 금액: ${winnings}`);
}
console.log(`\n최종적으로 가지고 있는 돈: ${funds}`);