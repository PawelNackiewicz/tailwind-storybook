import React from 'react';
import { Button } from './Button';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'click' },
    disabled: { control: 'boolean' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "PRIMARY",
  text: "Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "SECONDARY",
  text: "Secondary",
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "OUTLINED",
  text: "Outlined",
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: "PRIMARY",
  disabled: true,
  text: "DISABLED",
};