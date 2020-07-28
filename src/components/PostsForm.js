import React, { Component } from 'react'

// import PropTypes from 'prop-types'

export default class PostsForm extends Component {

    constructor(props){
        super(props)

        this.state={
            title: props.post ? props.post.title : '',
            body: props.posts ? props.posts.map( (p) => p.body ) : ''
        }
    }

    onTitleChange = (e) =>{
        const title = e.target.value

        this.setState(() => ({title}))
    }

    onBodyChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()

        const post = {
            title: this.state.title,
            body: this.state.body
        }

        this.props.onSubmit(post)
        console.log(post)
        
        

        
    }

    render() {
        return (
            <div>
                <h1>Add Post</h1>
               <form onSubmit={this.onSubmit}>
                   <div>
                       <label>Title :</label><br/>
                       <input 
                            className="title" 
                            type="text" 
                            
                            value={this.state.title} 
                            onChange={this.onTitleChange}
                       />
                   </div>
                    <br/>
                   <div>
                       <label>Body :</label><br/>
                       <textarea className="body" type="text" name="body" value={this.state.body} onChange={this.onBodyChange}/>
                   </div>
                   <br/>
                   <button type="submit">Submit</button>
                   
               </form>
            </div>
        )
    }
}





// PostsForm.propTypes = {
//     createPost: PropTypes.func.isRequired
// }

// const mapStateToProps = state => ({
//     posts: state.posts
// })



// export default connect(mapStateToProps,mapDispatchToProps)(PostsForm)
