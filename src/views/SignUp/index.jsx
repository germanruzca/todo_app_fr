import React from 'react';
import { SignUp as Signup, Header } from '../../components';
import { LogInView } from '../../components/Layout';

const SignUp = () => {
		return (
				<LogInView>
						<Header/>
						<Signup/>
				</LogInView>
		)

}

export { SignUp };
export default SignUp;