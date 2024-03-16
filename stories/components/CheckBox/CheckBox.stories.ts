import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { CheckBox } from './CheckBox';

const meta = {
  title: 'Example/CheckBox',
  component: CheckBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onChange: fn() },
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    value: "checked"
  },
};
export const Disabled: Story = {
  args: {
    value: "checked",
    disabled: true
  },
};
export const Icon: Story = {
  args: {
    value: "checked"
  },
};

