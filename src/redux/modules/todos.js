// action name
const ADD_TODO = 'todos/ADD_TODO';
const DELETE_TODO = 'todos/DELETE_TODO';
const TOGGLE_STATUS_TODO = 'todos/TOGGLE_STATUS_TODO';
const GET_TODO_BY_ID = 'todos/GET_TODO_BY_ID';
// action creator
export const addTodo = (paylode) => {
  return {
    type: ADD_TODO,
    paylode,
  };
};
export const deleteTodo = (paylode) => {
  return {
    type: DELETE_TODO,
    paylode,
  };
};
export const toggleStatusTodo = (paylode) => {
  return {
    type: TOGGLE_STATUS_TODO,
    paylode,
  };
};
export const getTodoById = (paylode) => {
  return {
    type: GET_TODO_BY_ID,
    paylode,
  };
};
//initialState
const initialState = {
  todos: [
    {
      id: '1',
      title: '리액트 공부하기',
      body: '리액트 기초를 공부하자',
      isDone: false,
    },
    {
      id: '2',
      title: '리액트 공부하기',
      body: '리액트 기초를 공부하자',
      isDone: true,
    },
  ],
};
//reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.paylode],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((card) => card.id !== action.paylode),
      };
    case TOGGLE_STATUS_TODO:
      return {
        ...state,
        todos: state.todos.map((card) => {
          if (card.id === action.paylode) {
            return {
              ...card,
              isDone: !card.isDone,
            };
          } else {
            return card;
          }
        }),
      };

    default:
      return state;
  }
};
export default todos;
