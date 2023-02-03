import React, {Suspense} from 'react';
import {NavLink, Route, Routes} from 'react-router-dom';
import Counter from "./components/Counter";
import MainPageAsync from "./pages/MainPage/MainPageAsync";
import AboutPageAsync from "./pages/AboutPage/AboutPageAsync";

import './styles/index.scss'
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames";

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>toggle</button>
            <NavLink to={'/'}>main page</NavLink>
            <NavLink to={'/about'}>about page</NavLink>
            <NavLink to={'/counter'}>counter page</NavLink>
            <Suspense fallback={'loading...'}>
                <Routes>
                    <Route path="/" element={<MainPageAsync/>}/>
                    <Route path="/about" element={<AboutPageAsync/>}/>
                    <Route path="/counter" element={<Counter/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;