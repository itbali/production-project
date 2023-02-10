import React from 'react';
import { useTranslation } from 'react-i18next';

function AboutPage() {
    const { t } = useTranslation('aboutPage');

    return (
        <div>
            <h1>{t('about-page', { ns: 'aboutPage' })}</h1>
        </div>
    );
}

export default AboutPage;
