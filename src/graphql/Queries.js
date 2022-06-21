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
	query GetTasks($boardId: ID!){
		  tasks(boardId: $boardId) {
		    id,
		    title,
		    boardId,
		    status
		  }
	}
`;

export const DESTROY_TASK = gql`
		mutation DestroyTask($taskId: ID!){
  destroyTask(input: {id: $taskId}){
    task {
      id
    },
    success,
    errors
  }
}
`;