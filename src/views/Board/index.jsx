import React, {useState, useEffect} from 'react';
import { ListCard, Header, TitleBoard  } from '../../components';
import { LayoutBoardView, LayoutBoards } from '../../components/Layout';
import {LOAD_TASKS} from '../../graphql/Queries';
import {useQuery} from '@apollo/client';
import { useParams, useLocation } from 'react-router-dom';

const Board = () => {
		let boardId = useParams();
		const [tasks, setTasks] = useState([])
		const navi = useLocation();
		const nameBoard = navi.state
		const { error, loading, data } = useQuery(LOAD_TASKS, { variables: { boardId: boardId.id }});

		useEffect(() => {
				if (data) {
						setTasks(data.tasks)
				}

		}, [data])
		return (
				<LayoutBoardView>
						<Header/>
						<TitleBoard name={`${nameBoard}`}/>
						<LayoutBoards>
								<ListCard typeList={1} titleList={'To-Do'} tasks={tasks.filter(t => t.status === 1)} loading={loading}/>
								<ListCard typeList={2} titleList={'In Progress'} tasks={tasks.filter(t => t.status === 2)} loading={loading}/>
								<ListCard typeList={3} titleList={'Done'} tasks={tasks.filter(t => t.status === 3)} loading={loading}/>
						</LayoutBoards>
				</LayoutBoardView>
		)
}

export { Board };
export default Board;