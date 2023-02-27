import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../components";

export default {
    title: "Button",
    component: Button,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Base = Template.bind({});

export const Dark = Template.bind({});
Dark.args = {
    isDark: true,
};

export const Active = Template.bind({});
Active.args = {
    isActive: true,
};

export const Uppercase = Template.bind({});
Uppercase.args = {
    isUppercase: true,
};
