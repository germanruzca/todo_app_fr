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

const Component = () => {

		const sendMessage = () => {
				alert('Board created')
		}

		return (
			<ListBoard>
					<ListBoardHeader>
							<ListBoardTitle>Your boards</ListBoardTitle>
							<ListBoardAdd onClick={sendMessage}>
									<IconPlus/>
									<p>Create board</p>
							</ListBoardAdd>
					</ListBoardHeader>
					<ListBoardContainer>
							<BoardCard	numberOfTasks={10} nameBoard={'Home'}/>
					</ListBoardContainer>
			</ListBoard>
		)
}

export { Component as ListBoard };
export default ListBoard;