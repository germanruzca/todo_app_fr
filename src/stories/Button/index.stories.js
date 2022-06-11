import { Button as Component } from '../../components'
import { TemplateStyled } from "../../utils/index";

export default {
		title: "Components/Button",
		component: Component,
		decorators: [TemplateStyled],
}

const Template = args => <Component {...args} />
export const Primary = Template.bind({})