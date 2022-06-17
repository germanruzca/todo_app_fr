import { gql } from '@apollo/client';

export const LOAD_USERS = gql`
		query {
				users {
						username
					}
		}
`;

export const LOAD_BOARDS = gql`
		query {
  boards {
    id,
    name,
    tasks {
      title
    }
  }
}
`;

export const LOAD_TASKS = gql`
	query {
		  tasks(boardId: $boardId) {
		    title,
		    boardId
		  }
	}
`;