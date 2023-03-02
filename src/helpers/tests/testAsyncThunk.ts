import { Action, AsyncThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/storeProvider';

export class TestAsyncThunk<Returned, Args, RejectedValue> {
    dispatch: jest.MockedFn<ThunkDispatch<StateSchema, any, Action>>;

    getState: () =>StateSchema;

    actionCreator: (arg: Args)=>AsyncThunkAction<Returned, Args, { rejectValue: RejectedValue}>;

    constructor(
        actionCreator:(arg: Args)=> AsyncThunkAction<Returned, Args, { rejectValue: RejectedValue}>,
    ) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();
    }

    async callThunk(args: Args) {
        const action = this.actionCreator(args);
        const result = await action(this.dispatch, this.getState, undefined);
        return result;
    }
}
