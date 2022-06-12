import React from "react";
import {ListCard, ListCardAdd, ListCardTitle, ListCardHeader, TaskCards} from './styled';
import { IconPlus} from '../../lib/icons';
import { TaskCard } from '../TaskCard';

const Component = ({colorList, numberList, titleList}) => {

		const addTask = () => {
				alert('Task added')
		}
		return (
			<ListCard colorList={colorList}>
					<ListCardHeader>
							<ListCardTitle>{titleList}</ListCardTitle>
							<ListCardAdd onClick={addTask} title={'Add new task to this list'}>
									<IconPlus/>
									<p>Add Task</p>
							</ListCardAdd>
					</ListCardHeader>
					<TaskCards>
							{
									numberList.map((cardTitle, index) => {
											return <TaskCard title={cardTitle} key={`card-${index}`}/>
									})
							}
					</TaskCards>
			</ListCard>
		);
}

export { Component as ListCard };
export default Component;
