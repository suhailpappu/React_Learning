import { FETCH_POSTS, NEW_POST, DELETE_POST, EDIT_POST } from "../actions/types";

const initialState = {
  items: [],
  item: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.data,
      };

    case NEW_POST:
      return {
        ...state,
        items: [action.data, ...state.items],
      };
    case DELETE_POST:
      return  {
        ...state,
        items: state.items.filter( ( {id} ) => id !== action.id)
      }
      case EDIT_POST:
        return state.map((post) => {
          if (post.id === action.id) {
              return {
                  ...post,
                  ...action.post
              }
          }else{
              return post
          }
      })
        

    default:
      return state;
  }
};
