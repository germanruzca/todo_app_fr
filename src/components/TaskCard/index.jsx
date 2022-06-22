import React, { useState, useRef, useEffect } from 'react';
import { TaskCard, TaskCardInput, TaskCardIcons, DeleteTask, EditTask } from './styled';
import { IconEdit, IconPlus} from '../../lib/icons';
import {random} from 'lodash';
import { Draggable } from 'react-beautiful-dnd';

const Component = ({title, removeTask, taskId, deseable, setTasksToUse, tasksToUse, addNewTask, typeOfList, updateTask, index}) => {
		const [isDesabled, setIsDesabled] = useState(deseable);
		const [isReadyToUpdate, setIsReadyToUpdate] = useState(false);
		const ref = useRef(null);

		const changeDesable = () => {
				setIsDesabled(false);
				setIsReadyToUpdate(true)
		}

		useEffect(() => {
				if (!isDesabled) {
						ref.current.focus();
				}
		});

		const stopEditFocus = (e) => {
						if(e.target.value === '') {
								setTasksToUse(tasksToUse.slice(0, -1))
						}
						setIsDesabled(true);
		}

		const handleInputTask = (event) => {
				console.log(event.target.value);
		}

		const keyPressEnter = (e) => {
				if(e.keyCode === 13) {
						if(e.target.value === '')
									return stopEditFocus(e)

						if(isReadyToUpdate === false) {
								addNewTask({variables: {title: e.target.value, body: 'ejemplo de body', status: typeOfList, boardId: 45}})
						} else {
								updateTask({variables: {id: taskId, title: e.target.value, status: random(1, 3, false)}})
								setIsDesabled(true);
						}
						stopEditFocus();
				}
		}

		function showIcons () {
				if (isDesabled) {
						return (
								<TaskCardIcons>
										<DeleteTask onClick={() => removeTask(taskId)}>
												<IconPlus title={'Delete task'}/>
										</DeleteTask>
										<EditTask onClick={changeDesable} disabled={!isDesabled} >
												<IconEdit title={'Edit task'}/>
										</EditTask>
								</TaskCardIcons>
						)
				}
		}

		return (
				<Draggable draggableId={`${taskId}`} index={index}>
						{(provided) => (
								<TaskCard
										isDesabled={isDesabled}
										{...provided.draggableProps}
										{...provided.dragHandleProps}
										ref={provided.innerRef}
								>
										<div>
												<TaskCardInput
														ref={ref}
														defaultValue={title}
														disabled={isDesabled}
														onBlur={stopEditFocus}
														onChange={handleInputTask}
														onKeyDown={keyPressEnter}
														isDesabled={isDesabled}
														maxLength={25}
												/>
										</div>
										{showIcons()}
								</TaskCard>
						)}
				</Draggable>
		);
}

export { Component as TaskCard };
export default Component;
