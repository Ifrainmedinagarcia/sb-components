import { MyLabel } from '../../components/MyLabel';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
	title: "UI/MyLabel",
	component: MyLabel,
	argTypes: {
		size: {control: "select"},
		color: {control: "select"},
		fontColor: {control: "color"}
	}
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />

export const basic = Template.bind({})

basic.args = {
	label: "No Label",
	size: "normal",
	allCaps: false,
	color: 'primary'
}

export const AllCaps = Template.bind({})
AllCaps.args = {
	label: "No Label",
	size: "normal",
	allCaps: true,
	color: 'primary'
}

export const Secondary = Template.bind({})

Secondary.args = {
	label: "No Label",
	size: "normal",
	allCaps: false,
	color: "secondary"
}

export const Tertiary = Template.bind({})

Tertiary.args = {
	label: "No Label",
	size: "normal",
	allCaps: false,
	color: "tertiary"
}



export const CustomFontColor = Template.bind({})

CustomFontColor.args = {
	label: "No Label",
	size: "normal",
	allCaps: false,
	color: "tertiary",
	fontColor:"#5517ac"
}