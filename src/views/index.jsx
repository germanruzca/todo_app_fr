import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Home } from './Home'
import { Board } from './Board'
import { LogIn } from './LogIn'
import { SignUp } from './SignUp'

const MainRouter = () => {
		return (
				<Router>
						<Routes>
								<Route path={'/'} element={<Home/>}/>
								<Route path={'/board'} element={<Board/>}/>
								<Route path={'/signin'} element={<LogIn/>}/>
								<Route path={'/signup'} element={<SignUp/>}/>
						</Routes>
				</Router>

		)
}

export { MainRouter };
export default MainRouter;