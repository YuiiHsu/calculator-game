import style from "./style.module.css";

const PlayPage = () => {

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
            <span className={style.time}>00:59</span>

            <ul className={style.formula}>
                <li className={style.black}>11</li>
                <li>×</li>
                <li className={style.black}>12</li>
                <li>=</li>
            </ul>

            <ul className={style.answerArea}>
                <li className={style.answer}>132</li>
                <li className={style.enterHint}>press enter to answer</li>
            </ul>
        </div>
    </div >
}

export default PlayPage;