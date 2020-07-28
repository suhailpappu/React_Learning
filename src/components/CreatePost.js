import React, { Component } from 'react'
import PostsForm from './PostsForm'
import { connect } from 'react-redux'
import { createPost } from '../actions/postsActions'

export default class CreatePost extends Component {

    onSubmit = (post) => {
        this.props.createPost(post)
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <PostsForm onSubmit = { this.onSubmit }/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    createPost: (post) => dispatch(createPost(post))
})

// const mapStateToProps = state => ({
//     posts: state.posts
// })




export default connect(undefined,mapDispatchToProps)(CreatePost)