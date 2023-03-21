import { Comment } from 'entities/Comment';
import { ArticleDetailCommentsSchema } from 'pages/ArticleDetailPage';
import {
    fetchCommentsByArticleId,
} from 'pages/ArticleDetailPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleDetailCommentsReducer } from './ArticleDetailCommentsSlice';

const comment: Comment = {
    id: '1',
    text: 'text',
    user: {
        id: '1',
        username: 'username',
    },
};
const slice: ArticleDetailCommentsSchema = {
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
};
describe('articleDetailCommentsSlice should', () => {
    it(' set isLoading to true while loading and clean error', () => {
        const result = ArticleDetailCommentsReducer(
            slice,
            fetchCommentsByArticleId.pending('', ''),
        );
        expect(result.error).toBeFalsy();
        expect(result.isLoading).toBe(true);
    });
    it(' set isLoading to false and set comments', () => {
        const result = ArticleDetailCommentsReducer(
            slice,
            fetchCommentsByArticleId.fulfilled([comment], '', ''),
        );
        expect(result.isLoading).toBe(false);
        expect(result.entities['1']).toEqual(comment);
    });
    it(' set isLoading to false and set error', () => {
        const result = ArticleDetailCommentsReducer(
            slice,
            fetchCommentsByArticleId.rejected(Error(), '', '', 'error'),
        );
        expect(result.isLoading).toBe(false);
        expect(result.error).toEqual('error');
    });
});
