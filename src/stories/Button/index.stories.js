import { Button as Component } from '../../components'
import { TemplateStyled } from "../../utils/index";
import {theme} from '../../style/theme';

export default {
		title: "Components/Button",
		component: Component,
		decorators: [TemplateStyled],
}

const Template = args => <Component {...args} />
export const Primary = Template.bind({})

Primary.args = {
		text: "New message"
}