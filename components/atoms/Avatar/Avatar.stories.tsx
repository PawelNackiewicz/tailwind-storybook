import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Avatar } from "./Avatar";

export default {
    title: 'Atoms/Avatar',
    component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const TextAvatar = Template.bind({});
TextAvatar.args = {
  alt: 'some alt text',
  text: 'AB'
};

export const ImageAvatar = Template.bind({});
ImageAvatar.args = {
  alt: 'some alt text',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShCqk3aG55jv4ZiiKwbcY0l9M59UqYkrIHTw&usqp=CAU',
};