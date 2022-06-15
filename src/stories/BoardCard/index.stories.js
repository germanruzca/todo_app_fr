import { BoardCard as Component } from '../../components';
import { TemplateStyled} from '../../utils';

export default {
		title: "Components/BoardCard",
		component: Component,
		decorators: [ TemplateStyled ],
}

const Template = args => <Component {...args} />
export const Primary = Template.bind({})

Primary.args = {
		nameBoard: 'Things about school',
		numberOfTasks: 5,
}