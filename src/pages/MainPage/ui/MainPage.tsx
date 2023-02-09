import React from 'react';
import {useTranslation} from "react-i18next";

const MainPage = () => {
    const {t} = useTranslation("mainPage")

    return (
        <div>
            <h1>{t("main-page")}</h1>
        </div>
    );
};

export default MainPage;