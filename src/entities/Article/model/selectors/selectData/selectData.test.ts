import { StateSchema } from 'app/providers/storeProvider';
import { mockArticle } from 'shared/assets/test/mockedArticle';
import { selectData } from './selectData';

describe('selectData should', () => {
    const state: DeepPartial<StateSchema> = {
        articleDetails: {
            data: mockArticle,
        },
    };
    it(' should return article if provided', () => {
        const result = selectData(state as StateSchema);
        expect(result).toEqual(mockArticle);
    });
    it(' should return undefined if not provided', () => {
        const result = selectData({} as StateSchema);
        expect(result).toBeUndefined();
    });
});
