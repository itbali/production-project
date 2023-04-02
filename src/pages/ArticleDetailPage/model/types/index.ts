import { ArticleDetailCommentsSchema } from './ArticleDetailCommentsSchema';
import { ArticleDetailRecommendationsSchema } from './ArticleDetailRecommendationsSchema';

export interface ArticleDetailsPageSchema {
    articleDetailsComments?: ArticleDetailCommentsSchema;
    articleRecommendations?: ArticleDetailRecommendationsSchema
}
