import { useRef, useState, useEffect } from "react";
import { getRandom, getMaxNumber } from "../Util/functions";
import { updateScore } from "../mocks/api";
import { useDispatch } from 'react-redux';
import * as scoreDuck from "../model/reducer";
import style from "./style.module.css";

const PlayPage = () => {
    const dispatch = useDispatch();
    const [countDown, setCountDown] = useState(60);
    const score = useRef(0);
    const [scoreText, setScoreText] = useState("000");
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const answer = useRef(0);
    const [name, setName] = useState('');
    const operator = {
        add: {
            text: "add",
            symbol: '+'
        },
        minus: {
            text: "minus",
            symbol: '-'
        },
        multiply: {
            text: "multiply",
            symbol: 'x'
        },
        divided: {
            text: "divided",
            symbol: '÷'
        }
    };
    const [symbol, setSymbol] = useState(operator.add.symbol);
    const [isOpen, setIsOpen] = useState(true);
    /**\
     * 更新數字
     */
    function newNumber() {
        const newSymbolItem = getRandom(Object.keys(operator).length);
        const newSymbol = Object.entries(operator)[newSymbolItem][1];
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

    function changeAnswer(e) {
        answer.current = e.target.value;
    };

    /**
     * 使用者確認後，處理答案
     * @returns 
     */
    function handleAnswer() {
        if (!symbol) {
            return;
        }

        const isCorrent = checkAnswer();
        handleScore(isCorrent);

        newNumber();
        document.getElementById("answer").value = "";
    };

    /**
     * 確認答案正確性
     * @returns 答案是否正確
     */
    function checkAnswer() {
        const currentAnswer = answer.current ? parseInt(answer.current) : 0;
        switch (true) {
            case symbol === operator.add.symbol:
                return num1 + num2 === currentAnswer;
            case symbol === operator.divided.symbol:
                return num1 / num2 === currentAnswer;
            case symbol === operator.minus.symbol:
                return num1 - num2 === currentAnswer;
            case symbol === operator.multiply.symbol:
                return num1 * num2 === currentAnswer;
            default:
                break;
        }
    };

    /**
     * 處理成績算分語顯示
     * @param {*} isCorrent 是否答對
     */
    function handleScore(isCorrent) {
        answer.current = 0;
        if (!isCorrent && score < 1) {
            return;
        }

        switch (true) {
            case !isCorrent && score.current < 1:
                return;
            case !isCorrent:
                score.current -= 1;
                break;
            case isCorrent && countDown > 41:
                score.current += 1;
                break;
            case isCorrent && countDown < 41:
                score.current += 5;
                break;
            default:
                break;
        }

        let current = score.current ? score.current.toString() : 0;
        switch (true) {
            case score.current > 99:
                break;
            case score.current > 9:
                current = `0${current}`;
                break;
            default:
                current = `00${current}`;
                break;
        }
        setScoreText(current);
    }

    /**
     * 將記錄存到DB
     */
    function updateCurrentScore() {
        dispatch(scoreDuck.actions.setPlayerOneName(name));
        dispatch(scoreDuck.actions.setPlayerOneScore(score.current));

        const request = {
            name: name,
            score: score.current
        }
        updateScore(request).then(res => {
            if (res.code !== 0) {
                window.alert("錯誤!!!!!!")
            }
        });
    }

    /**
     * 記錄使用者名稱
     */
    function handleName() {
        const currentName = document.getElementById("name").value;
        setName(currentName);
        setIsOpen(false);
    }

    /**
     * 監聽enter事件
     * @param {*} event 
     */
    document.onkeydown = function (event) {
        var e = event || window.event;
        if (!e) return;
        if (e.keyCode === 13) {
            if (isOpen) {
                handleName();
            }
            else {
                handleAnswer();
            }
        }
    }

    useEffect(() => {
        newNumber();
    }, [])

    useEffect(() => {
        setTimeout(() => {
            if (countDown > 0 && !isOpen) {
                setCountDown(t => t - 1);
            }
            else {
                updateCurrentScore();
            }
        }, 1000);
    }, [countDown, isOpen]);

    return <div className={style.container}>
        {isOpen && <div className={style.dialog}>
            <div className={style.nameArea}>
                <h1>Your name:</h1>
                <input id="name"></input>
                <p>Please input your name,and it will show in charts after you finish this game.</p>
            </div>
        </div>
        }
        <div className={style.app}>
            <div className={style.name}>
                {name}
            </div>
            <ul className={style.titleArea}>
                <li className={style.title}>
                    60 SECONDS CHALLENGE
                </li>
                <li className={style.scoreTitle}>
                    SCORE
                </li>
                <li className={style.score}>
                    {scoreText}
                </li>
            </ul>
            <span className={style.time}>
                00:{countDown > 10 ? countDown : `0${countDown}`}
            </span>

            <ul className={style.formula}>
                <li className={style.black}>{num1}</li>
                <li>{symbol}</li>
                <li className={style.black}>{num2}</li>
                <li>=</li>
            </ul>

            <ul className={style.answerArea}>
                <input
                    id="answer"
                    type="number"
                    className={style.answer}
                    placeholder="answer"
                    onChange={changeAnswer} />
                <li className={style.enterHint}>press enter to answer</li>
            </ul>
        </div>
    </div >
}

export default PlayPage;