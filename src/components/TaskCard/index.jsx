import React, { useState, useRef, useEffect } from 'react';
import { TaskCard, TaskCardInput, TaskCardIcons, DeleteTask, EditTask } from './styled';
import { IconEdit, IconPlus} from '../../lib/icons';

const Component = ({title = 'Do something'}) => {
		const [isDesabled, setIsDesabled] = useState(true);
		const ref = useRef(null);


		const surprise = () => {
				alert('Deleting task');
		}

		const disableEdit = () => {
				setIsDesabled(!isDesabled);
		}

		useEffect(() => {
				if (!isDesabled) {
						ref.current.focus();
				}
		})

		return (
				<TaskCard  isDesabled={isDesabled}>
						<div>
								<TaskCardInput ref={ref} defaultValue={title} disabled={isDesabled}/>
						</div>
						<TaskCardIcons>
								<DeleteTask onClick={surprise}>
										<IconPlus title={'Delete task'}/>
								</DeleteTask>
							<EditTask onClick={disableEdit}>
									<IconEdit title={'Edit task'}/>
							</EditTask>
						</TaskCardIcons>
				</TaskCard>
		)
}

export { Component as TaskCard };
export default Component;