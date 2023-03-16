import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { Code } from './Code';
import { ThemeDecorator } from '../../../../../config/.storybook/decorators/themeDecorator';

export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {},
    args: {
        text: 'import React from \'react\';\n'
            + 'import { ComponentMeta, ComponentStory } from \'@storybook/react\';\n'
            + 'import { Theme } from \'app/providers/themeProvider\';\n'
            + 'import { Code } from \'./Code\';\n'
            + 'import { ThemeDecorator } from \'../../../../config/.storybook/decorators/themeDecorator\';\n'
            + '\n'
            + 'export default {\n'
            + '    title: \'path/Code\',\n'
            + '    component: Code,\n'
            + '    argTypes: {},\n'
            + '    args: {\n'
            + '        children: \'Code\',\n'
            + '    },\n'
            + '} as ComponentMeta<typeof Code>;',
    },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const CodePrimary = Template.bind({});
export const CodeDark = Template.bind({});
CodeDark.decorators = [ThemeDecorator(Theme.DARK)];
