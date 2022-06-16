import React from 'react';
import { Login, Header } from '../../components';
import { LogInView } from '../../components/Layout';

const LogIn = () => {
		return (
				<LogInView>
						<Header/>
						<Login/>
				</LogInView>
		)

}

export { LogIn };
export default LogIn;