import { UserSchema } from 'entities/User';
import { CounterSchema } from 'entities/Counter';
import { LoginSchema } from 'features/AuthByUserName';

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,
    login: LoginSchema,
}
