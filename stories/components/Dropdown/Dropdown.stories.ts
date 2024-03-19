import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Dropdown } from './Dropdown';

const meta = {
  title: 'Example/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onChange: fn(), onKeyDown: fn(), onKeyPress: fn(), onKeyUp: fn() },
} satisfies Meta<typeof Dropdown>;

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


