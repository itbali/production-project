import { Story } from '@storybook/react';
import { classNames } from 'helpers/classNames';
import { Theme } from 'app/providers/themeProvider';

export const ThemeDecorator = (theme:Theme) => (Story:Story) => (
    <div className={classNames('app', {}, [theme])}>
        <Story/>
    </div>
)
