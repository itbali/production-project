import { StateSchema } from 'app/providers/storeProvider';

export const getArticleDetailsComments = (state: StateSchema) => (
    state.articleDetailsPage?.articleDetailsComments
);
