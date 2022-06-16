import { TitleBoard as Component } from '../../components';
import { TemplateStyled } from "../../utils/index";

export default {
		title: "Components/TitleBoard",
		component: Component,
		decorators: [TemplateStyled],
}

const Template = args => <Component {...args} />
export const TodoColor = Template.bind({})