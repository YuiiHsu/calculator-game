import { useRef, useState, useEffect } from "react";
import { getRandom, getMaxNumber } from "../Util/functions";
import style from "./style.module.css";

const PlayPage = () => {
    const [countDown, setCountDown] = useState(60);
    const score = useRef(0);
    const [scoreText, setScoreText] = useState("001");
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [answer, setAnswer] = useState(0);
    const operator = [
        {
            text: "add",
            symbol: '+'
        },
        {
            text: "minus",
            symbol: '-'
        },
        {
            text: "multiply",
            symbol: 'x'
        },
        {
            text: "divided",
            symbol: '÷'
        }
    ];
    const [symbol, setSymbol] = useState(operator[0].symbol);

    /**\
     * 更新數字
     */
    function newNumber() {
        const newSymbolItem = getRandom(Object.keys(operator).length);
        const newSymbol = operator[newSymbolItem];
        let digits = getMaxNumber(countDown);
        let newNum2 = getRandom(digits);
        if (newSymbol.text === "divided") {
            while (newNum2 === 0) {
                newNum2 = getRandom(digits);
            }
        }

        setSymbol(newSymbol.symbol);
        setNum1(getRandom(digits));
        setNum2(newNum2);
    };

    useEffect(() => {
        newNumber();
    }, [])

    useEffect(() => {
        setTimeout(() => {
            if (countDown > 0) {
                setCountDown(t => t - 1);
            }
        }, 1000);
    }, [countDown]);

    return <div className={style.container}>
        <div className={style.app}>
            <ul className={style.titleArea}>
                <li className={style.title}>
                    60 SECONDS CHALLENGE
                </li>
                <li className={style.scoreTitle}>
                    SCORE
                </li>
                <li className={style.score}>
                    001
                </li>
            </ul>
            <span className={style.time}>00:{countDown}</span>

            <ul className={style.formula}>
                <li className={style.black}>{num1}</li>
                <li>{symbol}</li>
                <li className={style.black}>{num2}</li>
                <li>=</li>
            </ul>

            <ul className={style.answerArea}>
                <li className={style.answer}>{answer}</li>
                <li className={style.enterHint}>press enter to answer</li>
            </ul>
        </div>
    </div >
}

export default PlayPage;