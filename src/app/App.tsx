import {NavLink} from 'react-router-dom';

import './styles/index.scss'
import {useTheme} from "app/providers/themeProvider";
import {classNames} from "helpers/classNames";
import {AppRouter} from "app/providers/router";

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button className={'btn'} onClick={toggleTheme}>toggle</button>
            <NavLink to={'/'}>main page</NavLink>
            <NavLink to={'/about'}>about page</NavLink>
            <AppRouter/>
        </div>
    );
};

export default App;