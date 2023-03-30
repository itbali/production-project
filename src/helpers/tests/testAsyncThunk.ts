import { Action, AsyncThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import { StateSchema, ThunkExtraArgument } from 'app/providers/storeProvider';
import axios, { AxiosStatic } from 'axios';
import MockedFunctionDeep = jest.MockedFunctionDeep;

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

export class TestAsyncThunk<Returned, Args, RejectedValue> {
    dispatch: jest.MockedFn<ThunkDispatch<StateSchema, ThunkExtraArgument, Action>>;

    getState: () =>StateSchema;

    actionCreator: (arg: Args)=>AsyncThunkAction<Returned, Args, { rejectValue: RejectedValue}>;

    api: MockedFunctionDeep<AxiosStatic>;

    constructor(
        actionCreator:(arg: Args)=> AsyncThunkAction<Returned, Args, { rejectValue: RejectedValue}>,
        state?: DeepPartial<StateSchema>,
    ) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn(() => state as StateSchema);
        this.api = mockedAxios;
    }

    callThunk(args: Args) {
        const action = this.actionCreator(args);
        return action(
            this.dispatch,
            this.getState,
            { api: this.api },
        );
    }
}
