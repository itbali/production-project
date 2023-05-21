import { Comment } from 'entities/Comment';

export const mockedComment: Comment = {
    id: '1',
    text: 'some comment',
    user: {
        id: '1',
        username: 'some username',
        avatar: 'some avatar',
    },
};
