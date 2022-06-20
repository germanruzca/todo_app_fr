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
		console.log(navi.state);
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
								<ListCard colorList={'#D89D05'} titleList={'To-Do'} tasks={tasks.filter(t => t.status === 1)} loading={loading}/>
								<ListCard colorList={'#16A1BF'} titleList={'In Progress'} tasks={tasks.filter(t => t.status === 2)} loading={loading}/>
								<ListCard colorList={'#669309'} titleList={'Done'} tasks={tasks.filter(t => t.status === 3)} loading={loading}/>
						</LayoutBoards>
				</LayoutBoardView>
		)
}

export { Board };
export default Board;