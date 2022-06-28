import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ContactSection } from './ContactSection';

export default {
    title: 'Organisms/ContactSection',
    component: ContactSection,
} as ComponentMeta<typeof ContactSection>;

const Template: ComponentStory<typeof ContactSection> = (args) => <ContactSection {...args} />;

export const SectionA = Template.bind({});
SectionA.args = {
    letter: 'A',
    contacts: [
        {
            id: '1',
            firstName: 'Pawi',
            lastName: 'Ab',
            phone: '+48 222 222 111'
        },
        {
            id: '1',
            firstName: 'Pawi',
            lastName: 'Aaa',
            phone: '+48 222 222 111'
        }
    ]

};