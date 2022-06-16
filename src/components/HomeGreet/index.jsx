import React from 'react'
import {HomeGreet, Greeting, Image, ImageContainer} from './styled';
import people from '../../assets/people.png'

const Component = () => {
		return (
				<HomeGreet>
						<Greeting>
								Bienvenido German
						</Greeting>
						<ImageContainer>
								<Image src={people} alt={'Welcome'}/>
						</ImageContainer>
				</HomeGreet>
		)
}

export {  Component as HomeGreet}
export default Component;