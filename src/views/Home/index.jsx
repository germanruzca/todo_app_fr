import React from 'react'
import { ListBoard, HomeGreet, Header} from '../../components';
import { Content } from '../../components/Layout'
import peope from '../../assets/people.png'

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
