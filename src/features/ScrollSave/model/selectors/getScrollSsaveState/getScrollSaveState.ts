import { StateSchema } from 'app/providers/storeProvider';

export const getScrollSaveState = (state: StateSchema) => state.scrollSave || {};
