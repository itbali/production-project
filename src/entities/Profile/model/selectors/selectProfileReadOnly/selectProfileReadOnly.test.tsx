import { StateSchema } from 'app/providers/storeProvider';
import { selectProfileReadOnly } from './selectProfileReadOnly';

describe('selectProfileReadOnly should', () => {
    it('  return true if readonly', () => {
        const state = {
            profile: {
                readonly: true,
            },
        };
        const result = selectProfileReadOnly(state as StateSchema);
        expect(result).toBe(true);
    });
    it('  return false if not readonly', () => {
        const state = {
            profile: {
                readonly: false,
            },
        };
        const result = selectProfileReadOnly(state as StateSchema);
        expect(result).toBe(false);
    });
    it('  return falsy with empty state', () => {
        const result = selectProfileReadOnly({} as StateSchema);
        expect(result).toBeFalsy();
    });
});
