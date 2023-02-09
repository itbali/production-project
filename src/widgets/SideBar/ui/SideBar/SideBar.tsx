import {classNames} from "helpers/classNames";
import cls from './SideBar.module.scss'
import {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher";
import {useTranslation} from "react-i18next";

interface SideBarProps {
    className?: string,
}

export const SideBar = ({className}: SideBarProps) => {
    const {t} = useTranslation()
    const [collapsed, setCollapsed] = useState(false)
    const onToggle = () => {
        setCollapsed(prevState => !prevState)
    }
    return (
        <div className={classNames(cls.SideBar, {[cls.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>{t('toggle-sidebar')}</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher/>
            </div>
        </div>
    );
};