import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ContactItem } from './ContactItem';

export default {
  title: 'Molecules/ContactItem',
  component: ContactItem,
} as ComponentMeta<typeof ContactItem>;

const Template: ComponentStory<typeof ContactItem> = (args) => <ContactItem {...args} />;

export const Item = Template.bind({});
Item.args = {
    id: '1',
    firstName: 'Pawi',
    lastName: 'Xyz',
    phone: '+48 222 222 111'
};

export const ItemWithImg = Template.bind({});
ItemWithImg.args = {
    id: '1',
    firstName: 'Pawi',
    lastName: 'Xyz',
    phone: '+48 222 222 111',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShCqk3aG55jv4ZiiKwbcY0l9M59UqYkrIHTw&usqp=CAU'
};
