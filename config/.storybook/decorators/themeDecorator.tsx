import { Story } from '@storybook/react';
import { classNames } from 'helpers/classNames';
import { Theme, ThemeProvider } from 'app/providers/themeProvider';

export const ThemeDecorator = (theme:Theme) => (Story:Story) => (
    <ThemeProvider initialTheme={theme}>
        <div id='root-app' className={classNames(`app ${theme}`)}>
            <Story/>
        </div>
    </ThemeProvider>
)
