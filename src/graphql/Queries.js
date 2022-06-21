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

export const ADD_TASK = gql`
		mutation AddTask($title: String!, $body: String!, $status: Int!, $boardId: Int!) {
  createTask(input: {
    title: $title,
    body: $body,
    status: $status,
    boardId: $boardId
  }) {
    success,
    task {
      id,
      title,
      body
      status,
      boardId
    },
    errors
  }
}
`;

export const UPDATE_TASK = gql`
	mutation UpdateTask($id: ID!, $title: String!, $status: Int!){
  updateTask(input: {
    id: $id,
    title: $title,
    status: $status
  }) {
    success,
    task {
      title,
      body,
      status,
      boardId
    },
    errors
  }
}
`;