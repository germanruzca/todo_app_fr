import React from 'react';
import {
		ListBoard,
		ListBoardAdd,
		ListBoardContainer,
		ListBoardHeader,
		ListBoardTitle,
} from './styled';
import { BoardCard} from '../BoardCard';
import { IconPlus } from '../../lib/icons';

const Component = ({boards}) => {

		const sendMessage = () => {
				alert('Board created')
		}

		return (
			<ListBoard>
					<ListBoardHeader>
							<ListBoardTitle>Your boards {boards.length}</ListBoardTitle>
							<ListBoardAdd onClick={sendMessage}>
									<IconPlus/>
									<p>Create board</p>
							</ListBoardAdd>
					</ListBoardHeader>
					<ListBoardContainer>
							{
									boards.map((board, index) => {
												return <BoardCard
														       numberOfTasks={10}
														       nameBoard={board.name}
														       idBoard={board.id}
														       key={`board-${index}`}
														       numberOfTasksByBoard={board.tasks.length}
												/>
									})
							}
					</ListBoardContainer>
			</ListBoard>
		)
}

export { Component as ListBoard };
export default ListBoard;