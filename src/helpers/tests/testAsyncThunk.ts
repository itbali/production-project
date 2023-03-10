import { Action, AsyncThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import { StateSchema, ThunkExtraArgument } from 'app/providers/storeProvider';
import axios, { AxiosStatic } from 'axios';
import { To } from 'react-router-dom';
import { NavigateOptions } from 'react-router';
import MockedFunctionDeep = jest.MockedFunctionDeep;

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

export class TestAsyncThunk<Returned, Args, RejectedValue> {
    dispatch: jest.MockedFn<ThunkDispatch<StateSchema, ThunkExtraArgument, Action>>;

    getState: () =>StateSchema;

    actionCreator: (arg: Args)=>AsyncThunkAction<Returned, Args, { rejectValue: RejectedValue}>;

    api: MockedFunctionDeep<AxiosStatic>;

    navigate: jest.MockedFn<(to: To, options?: NavigateOptions) => void>;

    constructor(
        actionCreator:(arg: Args)=> AsyncThunkAction<Returned, Args, { rejectValue: RejectedValue}>,
        state?: DeepPartial<StateSchema>,
    ) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn(() => state as StateSchema);
        this.api = mockedAxios;
        this.navigate = jest.fn();
    }

    async callThunk(args: Args) {
        const action = this.actionCreator(args);
        const result = await action(
            this.dispatch,
            this.getState,
            { api: this.api, navigate: this.navigate },
        );
        return result;
    }
}
