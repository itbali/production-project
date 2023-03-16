import { ArticleDetailsSchema } from 'entities/Article';
import { mockArticle } from 'shared/assets/test/mockedArticle';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById';
import { articleDetailsReducer } from './articleDetailsSlice';

const slice: ArticleDetailsSchema = {
    data: mockArticle,
    error: undefined,
    isLoading: false,
};
describe('articleDetailsSlice should', () => {
    it(' set isLoading to true and error to undefined ', () => {
        const result = articleDetailsReducer({ ...slice, error: 'error' }, fetchArticleById.pending);
        expect(result.isLoading).toBe(true);
        expect(result.error).toBeUndefined();
    });
    it(' set isLoading to false', () => {
        const result = articleDetailsReducer(
            {
                data: undefined,
                error: undefined,
                isLoading: true,
            },
            fetchArticleById.fulfilled(mockArticle, '', ''),
        );
        expect(result.isLoading).toBe(false);
        expect(result.error).toBeUndefined();
        expect(result.data).toEqual(mockArticle);
    });
    it(' set isLoading to false and error to error', () => {
        const result = articleDetailsReducer({ ...slice, error: 'error' }, fetchArticleById.rejected(Error('error'), '', '', 'error'));
        expect(result.isLoading).toBe(false);
        expect(result.error).toBe('error');
    });
});
