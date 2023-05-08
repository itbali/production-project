import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';

function AdminPanelPage() {
    const { t } = useTranslation();

    return (
        <Page>
            <h1>{t('admin-panel')}</h1>
        </Page>
    );
}

export default AdminPanelPage;
