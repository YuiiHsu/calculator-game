
import { useEffect, useRef, useState } from "react";
import { getScore } from "../mocks/api";
import style from "./style.module.css";
import { v4 as uuidv4 } from 'uuid';

const ChartsPage = () => {
    const page = useRef(1);
    const pageSize = useRef(20);
    const [list, setList] = useState([]);

    const sortList = (list) => {
        if (!list) {
            return [];
        }

        return list.sort((item1, item2) => {
            return item1.sort > item2.sort ? 1 : -1;
        });
    }

    const getList = () => {
        getScore(page, pageSize).then(res => {
            if (res.code === 0) {
                setList(sortList(res.data.list));
            }
            else {
                alert(res.message);
            }
        });
    };

    useEffect(() => {
        getList();
    }, []);

    return <div className={style.container}>
        <div className={style.app}>
            <h1>Charts</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(score => <tr key={uuidv4()}>
                        <td>{score.name}</td>
                        <td>{score.score}</td>
                    </tr>)}
                    <tr>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
}

export default ChartsPage;