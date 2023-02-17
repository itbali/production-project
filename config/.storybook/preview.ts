import { addDecorator } from '@storybook/react';
import { StylingDecorator } from './decorators/styleDecorator';
import { ThemeDecorator } from './decorators/themeDecorator';
import { Theme } from '../../src/app/providers/themeProvider';
import { RoutesDecorator } from './decorators/routesDecorator';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
addDecorator(StylingDecorator)
addDecorator(ThemeDecorator(Theme.LIGHT))
addDecorator(RoutesDecorator)

