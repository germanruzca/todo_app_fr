import { TaskCard as Component } from '../../components';
import { TemplateStyled } from "../../utils/index";

export default {
		title: 'Components/TaskCard',
		component: Component,
		decorators: [TemplateStyled],
}

const Template = args => <Component {...args} />
export const Primary = Template.bind({})
Primary.args = {
		title: 'Do homework',
}