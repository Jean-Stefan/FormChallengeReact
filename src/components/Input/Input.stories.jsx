import React from 'react';

import {Input} from './';

export default {
    title: 'Components/Input',
    component: Input,
};

const Template = (args) => {
    return (
        <div
            style={{
                display: 'flex',
                maxWidth: '500px',
            }}
        >
            <Input {...args} />
        </div>
    );
};
export const Text = Template.bind({});

Text.args = {
    type: 'text',
    placeholder: 'Foo Bar',
};
