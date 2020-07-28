import React, { Component } from 'react'
import PostsForm from './PostsForm'
import { connect } from 'react-redux';
import {editPost}from '../actions/postsActions'

class EditPost extends Component {
    onSubmit = (post) => {
        this.props.editPost(this.props.posts.items.id , post);
        //this.props.history.push("/");
    
        console.log("Updated !!", post);
      };
    render() {
        return (
            <div>
                <PostsForm post={this.props.post} onSubmit={this.onSubmit} />
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
      post: state.posts.find(
        (post) => post.id === props.match.params.id
      ),
    };
  };

  const mapDispatchToProps = (dispatch, props) => {
    return {
      editPost: (id, post) => dispatch(editPost(id, post))
    };
  };

  export default connect(mapStateToProps,mapDispatchToProps)(EditPost)
