import { StateSchema } from 'app/providers/storeProvider';
import { mockArticle } from 'shared/assets/test/mockedArticle';
import { selectArticleDetailsData } from './selectArticleDetailsData';

describe('selectData should', () => {
    const state: DeepPartial<StateSchema> = {
        articleDetails: {
            data: mockArticle,
        },
    };
    it(' should return article if provided', () => {
        const result = selectArticleDetailsData(state as StateSchema);
        expect(result).toEqual(mockArticle);
    });
    it(' should return undefined if not provided', () => {
        const result = selectArticleDetailsData({} as StateSchema);
        expect(result).toBeUndefined();
    });
});
