import { FETCH_POSTS, NEW_POST, DELETE_POST,EDIT_POST } from "./types";

export const fetchPosts = () => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: FETCH_POSTS,
        data,
      })
    );
};

export const createPost = (post) => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(post),
  })
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: NEW_POST,
        data,
      })
    );
};

export const deleteItem = ( {id}={} ) => (dispatch) => {
  dispatch({
    type: DELETE_POST,
    id
  })
}

export const editPost = ( id,post ) => (dispatch) => {
  dispatch({
    type: EDIT_POST,
    id,
    post
  })
}
