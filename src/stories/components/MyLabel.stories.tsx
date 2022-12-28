import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

export default {
  title: "Example/MyLabel",
  component: MyLabel,
  argTypes: {
    size: { control: "select" },
    color: { control: "select" },
  },
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => (
  <MyLabel {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  size: "h3",
  allCaps: false,
};

export const AllCaps = Template.bind({});
AllCaps.args = {
  size: "normal",
  allCaps: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: "normal",
  color: "text-secondary",
};

export const Terciary = Template.bind({});
Terciary.args = {
  size: "normal",
  color: "text-tertiary",
};

export const CustomFontColor = Template.bind({});
Terciary.args = {
  size: "normal",
  fontColor: "#5517ac",
};
