import React, {useState} from 'react';
import {ListCard, ListCardAdd, ListCardTitle, ListCardHeader, TaskCards} from './styled';
import { IconPlus} from '../../lib/icons';
import { TaskCard } from '../TaskCard';

const Component = ({colorList, numberList, titleList}) => {
		const [numberOfTasks, setNumberOfTasks] = useState(numberList)

		const addTask = () => {
				setNumberOfTasks([...numberOfTasks, 'New task'])
		}

		const removeItem = (index) => {
				setNumberOfTasks(numberOfTasks.filter((task, taskIndex) => taskIndex !== index ));
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
									numberOfTasks.map((cardTitle, index) => {
											return <TaskCard
													       title={cardTitle}
													       key={`card-${index}`}
													       removeTask={removeItem}
													       index={index}
																			/>
									})
							}
					</TaskCards>
			</ListCard>
		);
}

export { Component as ListCard };
export default Component;
