import React from 'react'
import { ListCard, Header, TitleBoard  } from '../../components';
import { Content } from '../../components/Layout';

const Board = () => {
		return (
				<Content>
						<Header/>
						<TitleBoard/>
						<ListCard colorList={'#D89D05'} titleList={'To-Do'} numberList={['Do homework']}/>
						<ListCard colorList={'#16A1BF'} titleList={'In Progress'} numberList={['Do homework']}/>
						<ListCard colorList={'#669309'} titleList={'Done'} numberList={['Do homework']}/>
				</Content>
		)
}

export { Board };
export default Board;