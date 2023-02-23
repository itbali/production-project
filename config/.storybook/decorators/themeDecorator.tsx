import { Story } from '@storybook/react';
import { Theme, ThemeProvider, useTheme } from 'app/providers/themeProvider';
import React from 'react';

const ThemeUser = ({ children }: { children:ReturnType<Story>}) => {
useTheme();
    return  children ;
}

export const ThemeDecorator = (theme:Theme) =>
    (Story:Story) => {
    console.log('themeDecorator', theme)
    return <ThemeProvider initialTheme={theme}>
        <ThemeUser>
            <div id='root-app' className={`app `}>
            <Story/>
            </div>
        </ThemeUser>
    </ThemeProvider>
}
