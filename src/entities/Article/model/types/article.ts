type ArticleBlockType = 'TEXT' | 'IMAGE' | 'CODE';

interface ArticleBaseBlock {
	id: number;
	type: ArticleBlockType;
}

interface ArticleCodeBlock extends ArticleBaseBlock {
	code: string;
	type: 'CODE',
}
interface ArticleImageBlock extends ArticleBaseBlock {
	src: string;
	title: string;
	type: 'IMAGE',
}
interface ArticleTextBlock extends ArticleBaseBlock {
	title?: string;
	paragraphs: string[];
		type: 'TEXT',
}

type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock;

enum ArticleType {
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
