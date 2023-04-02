import { StateSchema } from 'app/providers/storeProvider';
import { getArticleDetailsComments } from './getArticleDetailsComments';

describe('getArticleDetailsComments should', () => {
    it(' return article detail page if provided', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsPage: {
                articleDetailsComments: {
                    ids: ['1', '2'],
                    entities: {
                        1: {
                            id: '1',
                            text: 'text1',
                            user: {
                                id: '1',
                                username: 'user1',
                            },
                        },
                        2: {
                            id: '2',
                            text: 'text2',
                            user: {
                                id: '2',
                                username: 'user2',
                            },
                        },
                    },
                },
            },
        };
        const result = getArticleDetailsComments(state as StateSchema);
        expect(result).toEqual(state.articleDetailsPage?.articleDetailsComments);
    });
    it(' return undefined if not provided', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsPage: { articleDetailsComments: undefined },
        };
        const result = getArticleDetailsComments(state as StateSchema);
        expect(result).toBeUndefined();
    });
});
