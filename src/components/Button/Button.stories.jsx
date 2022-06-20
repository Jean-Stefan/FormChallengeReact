import React from 'react';

import {Button} from './';

export default {
    title: 'Components/Button',
    component: Button,
};

const Template = (args) => {
    return (
        <div
            style={{
                display: 'flex',
                maxWidth: '500px',
            }}
        >
            <Button {...args}>Button</Button>
        </div>
    );
};
export const Primary = Template.bind({});

Primary.args = {
    width: '100px',
    height: '50px',
    fontSize: '20px',
};
