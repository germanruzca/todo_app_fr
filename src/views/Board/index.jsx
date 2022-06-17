import React, {useState, useEffect} from 'react';
import { ListCard, Header, TitleBoard  } from '../../components';
import { LayoutBoardView, LayoutBoards } from '../../components/Layout';
import {LOAD_TASKS} from '../../graphql/Queries';
import {useQuery} from '@apollo/client';
import { useParams } from 'react-router-dom';

const Board = () => {

		let boardId = useParams();
		console.log(boardId)
		const [tasks, setTasks] = useState([])
		const { error, loading, data } =  useQuery(LOAD_TASKS, { variables: { boardId }});

		useEffect(() => {
				if (data ) {
						console.log(data.tasks)
						setTasks(data.tasks)
				}
		}, [data])
		console.log(tasks.length)
		return (
				<LayoutBoardView>
						<Header/>
						<TitleBoard/>
						<LayoutBoards>
								<ListCard colorList={'#D89D05'} titleList={'To-Do'} numberList={['Do homework']} tasks={tasks}/>
								<ListCard colorList={'#16A1BF'} titleList={'In Progress'} numberList={['Do homework']}/>
								<ListCard colorList={'#669309'} titleList={'Done'} numberList={['Do homework']}/>
						</LayoutBoards>
				</LayoutBoardView>
		)
}

export { Board };
export default Board;