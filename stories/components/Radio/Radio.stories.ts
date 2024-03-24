import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Radio } from './Radio';

const meta = {
  title: 'Example/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onChange: fn() },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: 'primary',
    lists: ['PrimaryValue1', 'PrimaryValue2', 'PrimaryValue3'],
    onChange: fn()
  },
};

export const Checked: Story = {
  args: {
    name: 'checked',
    checked: true,
    lists: ['CheckedValue1', 'CheckedValue2', 'CheckedValue3'],
    onChange: fn()
  },
};


export const Disabled: Story = {
  args: {
    name: 'disabled',
    lists: ['value1', 'value2', 'value3'],
    disabled: true
  },
};





