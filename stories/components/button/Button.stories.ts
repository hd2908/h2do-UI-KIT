import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    default: { label: 'Button' },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
    onClick: fn()
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    onClick: fn()
  },
};

export const Disabled: Story = {
  args: {
    disabled: true
  },
};


