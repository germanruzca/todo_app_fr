import React, { useEffect, useState } from 'react'
import { ListBoard, HomeGreet, Header} from '../../components';
import { Content } from '../../components/Layout'
import { useQuery  } from '@apollo/client';
import {LOAD_BOARDS} from '../../graphql/Queries';

const Home = () => {
		const [boards, setBoards] = useState([])
		const { error, loading, data } =  useQuery(LOAD_BOARDS);

		useEffect(() => {
				if (data ) {
						console.log(data.boards)
						setBoards(data.boards)
				}
		}, [data])
		return (
				<Content>
						<Header/>
						<HomeGreet/>
						<ListBoard boards={boards}/>
				</Content>
		)
}

export { Home };
export default Home;
