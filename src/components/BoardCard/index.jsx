import React from 'react';
import {BoardCard, BoardCardInfo, BoardCardTask, BoardCardTitle, BoardCardIcons} from './styled';
import { IconEdit, IconPlus } from '../../lib/icons';

const Component = (props) => {
		const { nameBoard, numberOfTasks } = props;
		return (
				<BoardCard>
						<BoardCardInfo>
								<BoardCardTitle>{nameBoard}</BoardCardTitle>
								<BoardCardTask>Tasks: {numberOfTasks}</BoardCardTask>
						</BoardCardInfo>
						<BoardCardIcons>
								<IconPlus/>
								<IconEdit/>
						</BoardCardIcons>
				</BoardCard>
		)
}

export { Component as BoardCard };
export default Component;
