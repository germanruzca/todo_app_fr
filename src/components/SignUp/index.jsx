import React from 'react';
import { SignUp, Title, Description, Fields, ButtonCotainer, LoginOptions } from './styled';
import { CustomInput, Button } from '../index';

const Component = () => {
		return (
				<SignUp>
						<Title>Sign Up</Title>
						<Description>Welcome to <strong>Daily <span>Boards</span></strong>! Please complete the registration with the next fields.</Description>
						<Fields>
								<div>
										<CustomInput placeholder={'German'} labelInput={'First Name'} inputType={'text'}/>
										<CustomInput placeholder={'Ruiz'} labelInput={'Last Name'} inputType={'text'}/>
								</div>
								<div>
										<CustomInput placeholder={'germanruzca'} labelInput={'Username'} inputType={'text'}/>
										<CustomInput placeholder={'example@you.com'} labelInput={'Email'} inputType={'email'}/>
								</div>
								<div>
										<CustomInput placeholder={'*********'} labelInput={'Password'} inputType={'password'}/>
										<CustomInput placeholder={'*********'} labelInput={'Password Confirmation'} inputType={'password'}/>
								</div>
						</Fields>
						<ButtonCotainer>
								<Button text={'SIGN UP'} />
						</ButtonCotainer>
						<LoginOptions>Already an account? <a href={'/signin'}>LOG IN</a></LoginOptions>
				</SignUp>
		);
}

export { Component as SignUp };
export default Component;
