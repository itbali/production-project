import { StateSchema } from 'app/providers/storeProvider';

export const getArticles = (state: StateSchema) => state.articlesPage;
