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
  args: { onChange: fn(), onClick: fn() },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    list: ['React', 'Angular', 'Vue', 'NodeJs', 'TypeScript'],
    onChange: fn()
  },
};
export const Disabled: Story = {
  args: {
    list: ['React', 'Angular', 'Vue', 'NodeJs', 'TypeScript'],
    disabled: true,
    onChange: fn()
  },
};


