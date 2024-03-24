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
    name: "primary",
    onChange: fn()
  },
};

export const Checked: Story = {
  args: {
    name: "checked",
    defaultChecked: true,
    onChange: fn()
  },
};


export const Disabled: Story = {
  args: {
    name: "disabled",
    disabled: true
  },
};


export const CheckBoxWithLabel: Story = {
  args: {
    name: "checkboxwithlabel",
    label: "label",
    onChange: fn()
  },
};



