import { BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import { Home } from './Home'
import { Board } from './Board'

const MainRouter = () => {
		return (
				<Router>
						<Routes>
								<Route path={'/'} element={<Home/>}/>
								<Route path={'/board'} element={<Board/>}/>
						</Routes>
				</Router>

		)
}

export { MainRouter };
export default MainRouter;