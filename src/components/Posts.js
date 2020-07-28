import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts,deleteItem } from '../actions/postsActions'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


class Posts extends Component {

    componentWillMount = () =>{
        this.props.fetchPosts()
    }

    onRemove = (id) => {
        this.props.deleteItem({id:id})
        console.log("post removed no"+id)
        console.log(this.props.posts.length) 
    }

    

    render() {

        const postItems = this.props.posts.map((post,index) => (
            <div key={post.id}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                <button 
            className="login-button login-button--secondary" 
            onClick={()=>this.onRemove(post.id)}>
                Remove Expense
          </button>

          <h3>
          <Link to={`/edit/${post.id}`} >Edit Post</Link>
              </h3>
            </div>
        ))


        return (
            <div>
                <h1>
                    <Link to={`/create/`}>Create a new post</Link>
                </h1>
                <hr/>
                {postItems}
            </div>
        )
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object,
    deleteItem: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    posts: state.posts
})

const mapDispatchToProps = (dispatch, props) => {
    return {
      fetchPosts: () => dispatch(fetchPosts()),
      deleteItem: (id) => dispatch(deleteItem(id)),
    };
  };

export default connect(mapStateToProps,mapDispatchToProps)(Posts)
