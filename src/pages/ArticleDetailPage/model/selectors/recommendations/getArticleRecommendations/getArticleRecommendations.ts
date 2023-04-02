import { StateSchema } from 'app/providers/storeProvider';

export const getArticleRecommendations = (state: StateSchema) => (
    state.articleDetailsPage?.articleRecommendations
);
