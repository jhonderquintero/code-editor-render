import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CodeEditor } from './CodeEditor';

export default {
  title: 'Components/CodeEditor',
  component: CodeEditor,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    exampleProp: { control: 'example' },
  },
} as ComponentMeta<typeof CodeEditor>;

const Template: ComponentStory<typeof CodeEditor> = () => (
  <div style={{ width: '100%', height: '40px' }}>
    <CodeEditor identifier="first" />
  </div>
);

export const Basic = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  label: 'Example Label',
};
