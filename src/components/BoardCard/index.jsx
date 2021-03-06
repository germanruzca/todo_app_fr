import React, { useState, useRef, useEffect } from 'react';
import {BoardCard, BoardCardInfo, BoardCardTask, BoardCardTitle, BoardCardIcons} from './styled';
import { IconEdit, IconPlus } from '../../lib/icons';
import { Link } from 'react-router-dom'

const Component = (props) => {
		const [isDesabled, setIsDesabled] = useState(true);
		const ref = useRef(null);
		const { nameBoard, idBoard, numberOfTasksByBoard } = props;

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

		const showIcons	= () => {
				if (isDesabled) {
						return (
								<BoardCardIcons>
										<IconPlus/>
										<IconEdit onClick={changeDesable}/>
								</BoardCardIcons>
						)
				}
		}

		return (
				<BoardCard>
						<Link
							to={`/board/${idBoard}`}
							state={`${nameBoard}`}
						>
								<BoardCardInfo>
												<BoardCardTitle
														ref={ref}
														defaultValue={nameBoard}
														disabled={isDesabled}
														onBlur={stopEditFocus}
														onChange={handleInputTask}
														onKeyDown={keyPressEnter}
														isDesabled={isDesabled}
														maxLength={30}
												/>
										<BoardCardTask>Tasks: {numberOfTasksByBoard}</BoardCardTask>
								</BoardCardInfo>
						</Link>
						{showIcons()}
				</BoardCard>
		)
}

export { Component as BoardCard };
export default Component;
