import style from "./index.module.css";

const StartPage = () => {

    return <div className={style.container}>
        <div className={style.app}>
            <div className={style.secondTitle}>
                60
            </div>
            <div className={style.title}>
                SECONDS
                <div className={style.symbol}>
                    +−×÷
                </div> CHALLENGE
            </div>

            <div className={style.buttonArea}>
                <div>
                    <div className={style.button}>
                        Play
                    </div>
                    <p>try to answer more as you can</p>
                </div>
                <div className={style.button}>
                    Charts
                </div>
            </div>
        </div>
    </div>
}

export default StartPage;