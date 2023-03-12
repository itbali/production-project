import { StateSchema } from 'app/providers/storeProvider';

export const selectIsInitialized = (state: StateSchema) => state.user.isInitialized;
