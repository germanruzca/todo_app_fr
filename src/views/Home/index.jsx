import React from 'react'
import { ListBoard} from '../../components';
import { Content } from '../../components/Layout'
import peope from '../../assets/people.png'

const Home = () => {

		return (
				<Content>
						<h1>Weolcome back German</h1>
						<img src={peope}/>
						<ListBoard/>
				</Content>
		)
}

export { Home };
export default Home;
