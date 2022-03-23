import { useNavigate } from 'react-router-dom';
import { routerList } from "../Router/routerList";
import style from "./index.module.css";

const StartPage = () => {
    const navigate = useNavigate();

    return <div className={style.container}>
        <ul className={style.app}>
            <li className={style.secondTitle}>
                60
            </li>
            <li className={style.title}>
                SECONDS
                <div className={style.symbol}>
                    +−×÷
                </div> CHALLENGE
            </li>

            <ul className={style.buttonArea}>
                <li>
                    <div className={style.button} onClick={() => navigate(routerList.play)}>
                        Play
                    </div>
                    <p>try to answer more as you can</p>
                </li>
                <li className={style.button} onClick={() => navigate(routerList.charts)}>
                    Charts
                </li>
            </ul>
        </ul>
    </div>
}

export default StartPage;