type ArticleBlockType = 'TEXT' | 'IMAGE' | 'CODE';

interface ArticleBaseBlock {
    id: number;
    type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBaseBlock {
    code: string;
    type: 'CODE',
}
export interface ArticleImageBlock extends ArticleBaseBlock {
    src: string;
    title: string;
    type: 'IMAGE',
}
export interface ArticleTextBlock extends ArticleBaseBlock {
    title?: string;
    paragraphs: string[];
    type: 'TEXT',
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock;

export enum ArticleType {
    IT= 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMY = 'ECONOMY',
}

export interface Article {
    blocks: ArticleBlock[];
    createdAt: string;
    id: string;
    img: string;
    subtitle?: string;
    title: string;
    type: ArticleType[];
    views: number;
}
