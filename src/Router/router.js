import { HashRouter, Routes, Route } from 'react-router-dom';
import { routerList } from "./routerList"
import StartPage from '../StartPage';
import PlayPage from "../PlayPage";
import ChartsPage from '../ChartsPage';

const Router = () => {

    return <HashRouter>
        <Routes>
            <Route path={routerList.play} element={<PlayPage />}></Route>
            <Route path={routerList.charts} element={<ChartsPage />}></Route>
            <Route path='/' element={<StartPage />}> </Route>
        </Routes>
    </HashRouter>
}

export default Router;