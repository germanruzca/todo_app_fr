import { CustomInput as Component } from '../../components'
import { TemplateStyled } from "../../utils/index";

export default {
		title: "Components/CustomInput",
		component: Component,
		decorators: [TemplateStyled],
}

const Template = args => <Component {...args} />
export const Primary = Template.bind({})

Primary.args = {
		placeholder: 'New placeholder message',
		labelInput: 'New label text',
		inputType: 'text'
}