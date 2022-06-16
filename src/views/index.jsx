import { BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import { Home } from './Home'

const MainRouter = () => {
		return (
				<Router>
						<Routes>
								<Route path={'/'} element={<Home/>}/>
								<Route path={'/contacto'} element={<h1>Hola Mundo</h1>}/>
						</Routes>
				</Router>

		)
}

export { MainRouter };
export default MainRouter;