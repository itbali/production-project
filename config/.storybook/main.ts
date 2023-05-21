import type { StorybookConfig } from '@storybook/react/types';

const config: StorybookConfig = {
    stories: [
        "../../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions"
    ],
    framework: "@storybook/react",
    core: {
        builder: {
            name: '@storybook/builder-webpack5',
            options: {
                lazyCompilation: true,
            }
        }
    },
    staticDirs:['../../public']
}
module.exports = config
