import React from 'react'
import { ListBoard, HomeGreet, Header} from '../../components';
import { Content } from '../../components/Layout'

const Home = () => {
		return (
				<Content>
						<Header/>
						<HomeGreet/>
						<ListBoard/>
				</Content>
		)
}

export { Home };
export default Home;
