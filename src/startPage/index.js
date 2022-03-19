import { useNavigate, HashRouter as Router } from 'react-router-dom';
import { routerList } from "../Router/routerList";
import style from "./index.module.css";

const StartPage = () => {
    const navigate = useNavigate();

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
                    <div className={style.button} onClick={() => navigate(routerList.play)}>
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