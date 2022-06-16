import React from 'react'
import { Header, Image, ImageLogoContainer} from './styled';
import Logo from '../../assets/logo.png'

const Component = () => {

		return (
				<Header>
						<ImageLogoContainer>
							<a href={'/'}>
									<Image src={Logo}/>
							</a>
						</ImageLogoContainer>
				</Header>

		)
}

export { Component as Header };
export default Component;