import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Input } from './Input';

const meta = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onChange: fn(), onKeyDown: fn(), onKeyPress: fn(), onKeyUp: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'text', onChange: fn(), onKeyDown: fn(), onKeyPress: fn(), onKeyUp: fn()
  },
};
export const Disabled: Story = {
  args: {
    type: 'text',
    disabled: true
  },
};
export const Icon: Story = {
  args: {
    type: 'icon',
    icon: 'SearchOutlined', onChange: fn(), onKeyDown: fn(), onKeyPress: fn(), onKeyUp: fn()

  },
};

