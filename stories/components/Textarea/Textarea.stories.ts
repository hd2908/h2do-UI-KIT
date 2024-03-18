import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Textarea } from './Textarea';

const meta = {
  title: 'Example/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onChange: fn(), onKeyDown: fn(), onKeyPress: fn(), onKeyUp: fn() },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    onChange: fn(), onKeyDown: fn(), onKeyPress: fn(), onKeyUp: fn()
  },
};
export const Disabled: Story = {
  args: {
    disabled: true
  },
};


