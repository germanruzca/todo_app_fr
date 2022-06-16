import { Header as Component } from '../../components'
import { TemplateStyled } from "../../utils/index";

export default {
		title: "Components/Header",
		component: Component,
		decorators: [TemplateStyled],
}

const Template = args => <Component {...args} />
export const Primary = Template.bind({});