import React, {useEffect, useState} from 'react';
import {ListCard, ListCardAdd, ListCardTitle, ListCardHeader, TaskCards, EmptyList} from './styled';
import { IconPlus} from '../../lib/icons';
import { TaskCard } from '../TaskCard';
import { useMutation } from '@apollo/client';
import {DESTROY_TASK, LOAD_TASKS} from '../../graphql/Queries';
import _ from 'lodash'

const Component = ({colorList, titleList, tasks, loading}) => {
		const [ tasksToUse, setTasksToUse ] = useState([]);
		const [force, setForce] = useState(null)
		const [removeTask, { data, loadingDestoy, error }] = useMutation(DESTROY_TASK, {
				refetchQueries: [
						{ query: LOAD_TASKS},
																						'GetTasks'
				]
		});

		useEffect(() => {
				setTasksToUse(tasks)
		}, [tasks])

		const addTask = () => {
				setTasksToUse([...tasksToUse, { title: "Nueva task", boardId: 1}]);
		}

		const removeItem = (id) => {
				removeTask({ variables: {taskId:id}});
		}

		const renderTasks = () => {
				if (!_.isEmpty(tasksToUse)) {
						return tasksToUse.map((task, index) => (
								 <TaskCard
										       title={task.title}
										       taskId={task.id}
										       key={`task-${index}`}
										       removeTask={removeItem}
										       index={index}
								/>
						));
				}
				return <EmptyList><h1>No tasks</h1></EmptyList>
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
							{loading ? <p>Cargando</p> :  renderTasks()}
					</TaskCards>
			</ListCard>
		);
}

export { Component as ListCard };
export default Component;
