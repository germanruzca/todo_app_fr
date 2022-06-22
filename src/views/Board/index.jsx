import React, {useState, useEffect} from 'react';
import { ListCard, Header, TitleBoard  } from '../../components';
import { LayoutBoardView, LayoutBoards } from '../../components/Layout';
import {LOAD_TASKS} from '../../graphql/Queries';
import {useQuery, useMutation} from '@apollo/client';
import { useParams, useLocation } from 'react-router-dom';
import { DragDropContext } from 'react-beautiful-dnd';
import { UPDATE_STATUS_TASK } from '../../graphql/Queries'

const Board = () => {
		let boardId = useParams();
		const [tasks, setTasks] = useState([])
		const [ updateStatus, {dataStatus, loadingStatus, errorStatus}] = useMutation(UPDATE_STATUS_TASK, {
				refetchQueries: [ { query: LOAD_TASKS}, 'GetTasks']
		})
		const navi = useLocation();
		const nameBoard = navi.state
		const { error, loading, data } = useQuery(LOAD_TASKS, { variables: { boardId: boardId.id }});

		useEffect(() => {
				if (data) {
						setTasks(data.tasks)
				}

		}, [data])

		const handleDragEnd = ({draggableId, source, destination, type}) => {
				if (!destination)
						return;

				if (destination.droppableId === source.droppableId && destination.index === source.index) {
						return;
				}

				updateStatus({variables: {id: draggableId, status:  parseInt(destination.droppableId)}})
		}
		return (
				<LayoutBoardView>
						<Header/>
						<TitleBoard name={`${nameBoard}`}/>
						<LayoutBoards>
								<DragDropContext
										onDragEnd={handleDragEnd}
								>
										<ListCard typeList={1} titleList={'To-Do'} tasks={tasks.filter(t => t.status === 1)} loading={loading} />
										<ListCard typeList={2} titleList={'In Progress'} tasks={tasks.filter(t => t.status === 2)} loading={loading}/>
										<ListCard typeList={3} titleList={'Done'} tasks={tasks.filter(t => t.status === 3)} loading={loading}/>
								</DragDropContext>
						</LayoutBoards>
				</LayoutBoardView>
		)
}

export { Board };
export default Board;