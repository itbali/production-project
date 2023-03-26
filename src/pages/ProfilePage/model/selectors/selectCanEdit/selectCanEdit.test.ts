import { selectCanEdit } from 'pages/ProfilePage/model/selectors/selectCanEdit/selectCanEdit';
import { StateSchema } from 'app/providers/storeProvider';

describe('selectCanEdit', () => {
    it('should return true if the user is the owner of the profile', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: {
                    id: '1',
                },
            },
            user: {
                authData: {
                    id: '1',
                },
            },
        };

        expect(selectCanEdit(state as StateSchema)).toBe(true);
    });

    it('should return false if the user is not the owner of the profile', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: {
                    id: '1',
                },
            },
            user: {
                authData: {
                    id: '2',
                },
            },
        };

        expect(selectCanEdit(state as StateSchema)).toBe(false);
    });
});
