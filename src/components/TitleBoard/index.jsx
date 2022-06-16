import React from 'react';
import { TitleBoard, Title } from './styled';
import { IconArrowLeft } from '../../lib/icons'

const Component = ({name='School'}) => {
		return (
				<TitleBoard>
					<a href={'/'}>
							<IconArrowLeft/>
					</a>
						<Title>
							{name}
						</Title>
				</TitleBoard>
		);
}

export { Component as TitleBoard };
export default TitleBoard;