import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { Counter } from 'entities/Counter';
import { Page } from 'widgets/Page';

function MainPage() {
    const { t } = useTranslation();
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        if (hasError) {
            throw new Error('hasError');
        }
    }, [hasError]);

    const onThrowErrorClick = useCallback(() => {
        setHasError(true);
    }, []);

    return (
        <Page>
            <Button onClick={onThrowErrorClick}>throw error</Button>
            <Counter />
            <h1>{t('main-page')}</h1>
        </Page>
    );
}

export default MainPage;
