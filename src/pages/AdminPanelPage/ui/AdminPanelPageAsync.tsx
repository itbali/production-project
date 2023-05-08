import { lazy } from 'react';
import AdminPanelPage from './AdminPanelPage';

const AdminPanelPageAsync = lazy(() => (import('./AdminPanelPage')));

export default AdminPanelPage;
