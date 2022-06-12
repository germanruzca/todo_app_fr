import styled from 'styled-components';

export const TaskCard = styled.div`
		cursor: pointer;
		width: 302px;
		height: 48px;
		background-color: #FFFFFF;
		border: 1px solid ${props => props.isDesabled ? '#9E9E9E' : '#B2EBEF'} ;
		box-sizing: border-box;
		padding: 10px;
		border-radius: 5px;
		font-family: 'Roboto', sans-serif;
		display: flex;
		justify-content: space-between;
		align-items: center;
`;

export const TaskCardInput	= styled.input`
		width: ${ props => props.isDesabled ? '200px' : '265px'};
		height: 100%;
		padding: 5px;
		border: 1px solid transparent;
		font-size: 15px;
		outline: transparent;
		background-color: transparent;
		
		&:disabled {
				color: black;
				background-color: transparent;
		}
`

export const TaskCardIcons = styled.div`
		display: flex;
`;

export const EditTask = styled.button`
		background-color: transparent;
		border-color: transparent;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: #9E9E9E;
    transition: all 0.2s ease-in-out;
  }
`


export const DeleteTask = styled.button`
  background-color: transparent;
  border-color: transparent;
		font-size: 20px;
  cursor: pointer;
		
		svg {
    &:nth-child(1) {
      transform: rotate(45deg);
    }

    &:hover {
      color: #9E9E9E;
      transition: all 0.2s ease-in-out;
    }
		}
`