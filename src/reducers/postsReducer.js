import { FETCH_POSTS, NEW_POST, DELETE_POST, EDIT_POST } from "../actions/types";

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.data
      

    case NEW_POST:
      return [
        action.data,
        ...state
      ]
        
      

    case DELETE_POST:
      return state.filter( ( {id} ) => id !== action.id)
      
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
