import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Example } from './Example';

export default {
  title: 'Components/Example',
  component: Example,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    exampleProp: { control: 'example' },
  },
} as ComponentMeta<typeof Example>;

const Template: ComponentStory<typeof Example> = () => <Example />;

export const Basic = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  label: 'Example Label',
};
