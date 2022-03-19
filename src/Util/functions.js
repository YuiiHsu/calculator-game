/**
 * 取得max內的的隨機數字
 * @param {*} max 位數
 * @returns max內的隨機數字
 */
export function getRandom(max) {
    return Math.floor(Math.random() * max);
}

export function getMaxNumber(countDown) {
    switch (true) {
        case (countDown < 21):
            return 1000;
        case (countDown < 41 && countDown > 20):
            return 100;
        case (countDown > 40):
            return 10;
    }
}
