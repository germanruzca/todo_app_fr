import { ListBoard as Component } from '../../components';
import { TemplateStyled} from '../../utils';

export default {
		title: "Components/ListBoard",
		component: Component,
		decorators: [ TemplateStyled ],
}

const Template = args => <Component {...args} />
export const Primary = Template.bind({});