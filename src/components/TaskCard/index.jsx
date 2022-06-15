import React, { useState, useRef, useEffect } from 'react';
import { TaskCard, TaskCardInput, TaskCardIcons, DeleteTask, EditTask } from './styled';
import { IconEdit, IconPlus} from '../../lib/icons';

const Component = ({title = 'Do something', removeTask, index}) => {
		const [isDesabled, setIsDesabled] = useState(true);
		const ref = useRef(null);

		const changeDesable = () => {
				setIsDesabled(!isDesabled);
		}

		useEffect(() => {
				if (!isDesabled) {
						ref.current.focus();
				}
		});

		const stopEditFocus = () => {
				setIsDesabled(true);
		}

		const handleInputTask = (event) => {
				console.log(event.target.value);
		}

		const keyPressEnter = (e) => {
				if(e.keyCode === 13) {
						alert( e.target.value);
				}
		}

		function showDeleteButton () {
				if (isDesabled) {
						return (
								<TaskCardIcons>
										<DeleteTask onClick={() => removeTask(index)}>
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
						{showDeleteButton()}
				</TaskCard>
		);
}

export { Component as TaskCard };
export default Component;
