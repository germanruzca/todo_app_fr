import React, { useState, useRef, useEffect } from 'react';
import { TaskCard, TaskCardInput, TaskCardIcons, DeleteTask, EditTask } from './styled';
import { IconEdit, IconPlus} from '../../lib/icons';

const Component = ({title, removeTask, taskId, deseable, setTasksToUse, tasksToUse, addNewTask, typeOfList}) => {
		const [isDesabled, setIsDesabled] = useState(deseable);
		const ref = useRef(null);

		const changeDesable = () => {
				setIsDesabled(!isDesabled);
		}

		useEffect(() => {
				if (!isDesabled) {
						ref.current.focus();
				}
		});

		const stopEditFocus = (toDelete) => {
				if (toDelete) {
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
								return stopEditFocus(true);

						addNewTask({variables: {title: e.target.value, body: 'ejemplo de body', status: typeOfList, boardId: 45}})
						stopEditFocus(false);
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
				<TaskCard  isDesabled={isDesabled}>
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
		);
}

export { Component as TaskCard };
export default Component;
