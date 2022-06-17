import React, {useEffect, useState} from 'react';
import {ListCard, ListCardAdd, ListCardTitle, ListCardHeader, TaskCards} from './styled';
import { IconPlus} from '../../lib/icons';
import { TaskCard } from '../TaskCard';

const Component = ({colorList, numberList, titleList, tasks = [{id: 1, title: 'hola', boardId: 1}]}) => {
		const [tasksBoard, setTasksBoard] = useState(tasks);
		console.log(tasks.length)


		const addTask = () => {
				setTasksBoard([...tasksBoard, {title: 'New task', boardId: 1}]);
		}

		const removeItem = (index) => {
				setTasksBoard(tasksBoard.filter((task, taskIndex) => taskIndex !== index ));
		}

		const renderTasks = () => {
				console.log(tasksBoard)
				if (tasksBoard) {
						return tasksBoard.map((task, index) => (
								 <TaskCard
										       title={task.title}
										       key={`task-${index}`}
										       removeTask={removeItem}
										       index={index}
								/>
						));
				}
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
							{renderTasks()}
					</TaskCards>
			</ListCard>
		);
}

export { Component as ListCard };
export default Component;
