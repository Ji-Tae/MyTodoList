// action name
const ADD_TODO = 'todos/ADD_TODO';
const DELETE_TODO = 'todos/DELETE_TODO';
const TOGGLE_STATUS_TODO = 'todos/TOGGLE_STATUS_TODO';

// action creator
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};
export const toggleStatusTodo = (payload) => {
  return {
    type: TOGGLE_STATUS_TODO,
    payload,
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
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((card) => card.id !== action.payload),
      };
    case TOGGLE_STATUS_TODO:
      return {
        ...state,
        todos: state.todos.map((card) => {
          if (card.id === action.payload) {
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
