import React from 'react';
import { Login, Title, Description, Fields, ButtonCotainer, SignUpOption } from './styled';
import { CustomInput, Button } from '../index';

const Component = () => {
		return (
				<Login>
						<Title>Log in</Title>
						<Description>Welcome back! Please type your credentials</Description>
						<Fields>
								<CustomInput placeholder={'example@you.com'} labelInput={'Email'} inputType={'email'}/>
								<CustomInput placeholder={'*********'} labelInput={'Password'} inputType={'password'}/>
						</Fields>
						<ButtonCotainer>
								<Button text={'LOG IN'} />
						</ButtonCotainer>
						<SignUpOption>Need a new account? <a href={'/signup'}>SIGN UP</a></SignUpOption>
				</Login>
		);
}

export { Component as Login };
export default Component;
