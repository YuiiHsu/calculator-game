import { HashRouter, Routes, Route } from 'react-router-dom';
import { routerList } from "./routerList"
import StartPage from '../StartPage';
import PlayPage from "../PlayPage";

const Router = () => {

    return <HashRouter>
        <Routes>
            <Route path={routerList.play} element={<PlayPage />}></Route>
            <Route path='/' element={<StartPage />}> </Route>
        </Routes>
    </HashRouter>
}

export default Router;