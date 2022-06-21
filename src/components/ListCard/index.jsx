import React, {useEffect, useState} from 'react';
import {ListCard, ListCardAdd, ListCardTitle, ListCardHeader, TaskCards, EmptyList} from './styled';
import { IconPlus} from '../../lib/icons';
import { TaskCard } from '../TaskCard';
import { useMutation } from '@apollo/client';
import {ADD_TASK, DESTROY_TASK, LOAD_TASKS, UPDATE_TASK} from '../../graphql/Queries';
import _ from 'lodash'

const Component = ({typeList, titleList, tasks, loading}) => {
		const [ tasksToUse, setTasksToUse ] = useState([]);
		const [removeTask, { data, loadingDestoy, error }] = useMutation(DESTROY_TASK, {
				refetchQueries: [ { query: LOAD_TASKS}, 'GetTasks' ]
		});

		const [addNewTask, {dataNewTask, loadingNewTask, errorNewTask}] = useMutation(ADD_TASK, {
				refetchQueries: [ { query: LOAD_TASKS},  'GetTasks'  ]
		});

		const [updateTask, {dataUpdatedTask, loadingUpdatedTask, errorUpdatedTask}] = useMutation(UPDATE_TASK, {
				refetchQueries: [ { query: LOAD_TASKS}, 'GetTasks']
		})

		const colorsToList = ['#D89D05', '#16A1BF', '#669309'];

		useEffect(() => {
				setTasksToUse(tasks)
		}, [tasks])

		const addTask = () => {
				setTasksToUse([...tasksToUse, { title: "", boardId: typeList}]);
		}

		const removeItem = (id) => {
				console.log(id);
				setTasksToUse(tasksToUse.splice(0, -1))
				removeTask({ variables: {taskId:id}}  );
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
										       deseable={task.title !== ""}
										       setTasksToUse={setTasksToUse}
										       tasksToUse={tasksToUse}
										       addNewTask={addNewTask}
										       updateTask={updateTask}
										       typeOfList={typeList}
								/>
						));
				}
				return <EmptyList><h1>No tasks</h1></EmptyList>
		}
		return (
			<ListCard colorList={colorsToList[typeList-1]}>
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
