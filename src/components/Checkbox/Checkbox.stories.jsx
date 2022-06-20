import React from 'react';

import {Checkbox} from './';

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
};

const Template = (args) => {
    return (
        <div
            style={{
                display: 'flex',
                maxWidth: '500px',
            }}
        >
            <Checkbox {...args} />
        </div>
    );
};
export const Check = Template.bind({});

Check.args = {
    label: 'Unchecked',
};
