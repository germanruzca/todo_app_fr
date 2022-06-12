import { ListCard as Component } from '../../components';
import { TemplateStyled } from "../../utils/index";

export default {
		title: "Components/ListCard",
		component: Component,
		decorators: [TemplateStyled],
}

const Template = args => <Component {...args} />
export const TodoColor = Template.bind({})
TodoColor.args = {
		colorList: '#D89D05',
		numberList: ['Do homework', 'Go to market'],
		titleList: 'To-Do'
}

export const ProgressColor = Template.bind({})
ProgressColor.args = {
		colorList: '#16A1BF',
		numberList: ['Review code'],
		titleList: 'In Progress'
}

export const DoneColor = Template.bind({})
DoneColor.args = {
		colorList: '#669309',
		numberList: ['Send confirmation to party', 'Go to the veterinarian','Send confirmation to party', 'Go to the veterinarian','Send confirmation to party', 'Go to the veterinarian'],
		titleList: 'Done'
}