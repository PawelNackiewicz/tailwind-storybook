import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Phonebook } from './Phonebook';
import { CONTACTS } from '../../../mocks';

export default {
    title: 'Templates/Phonebook',
    component: Phonebook,
} as ComponentMeta<typeof Phonebook>;

const Template: ComponentStory<typeof Phonebook> = (args) => <Phonebook {...args} />;

export const Book = Template.bind({});
Book.args = {
    contacts: CONTACTS
};