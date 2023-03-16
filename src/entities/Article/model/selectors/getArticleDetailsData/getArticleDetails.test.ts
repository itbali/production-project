import { StateSchema } from 'app/providers/storeProvider';
import { mockArticle } from 'shared/assets/test/mockedArticle';
import { getArticleDetails } from './getArticleDetails';

describe('getArticleDetails should ', () => {
    const state: DeepPartial<StateSchema> = {
        articleDetails: {
            data: mockArticle,
        },
    };

    it(' should return article if provided', () => {
        const result = getArticleDetails(state as StateSchema);
        expect(result).toEqual({ data: mockArticle });
    });
    it(' should return null if not provided', () => {
        const result = getArticleDetails({} as StateSchema);
        expect(result).toBeUndefined();
    });
});
