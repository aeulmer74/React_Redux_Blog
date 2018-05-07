import React, { Component } from 'react';
//import axios from '../axios-instance';


import { connect } from 'react-redux';
import * as actionTypes from '../store/actions/actionTypes';

class CreatePost extends Component {
    state = {
        title: '',
        body: '',
        author: '',
        category: undefined
    }

    handlePost = () => {
        const post = {
            id: Math.random().toString().replace('0.', ''),
            timestamp: Date.now(),
            title: this.state.title,
            body: this.state.body,
            author: this.state.author,
            category: this.state.category ? this.state.category : 'react'
        }

        // axios.post('/posts', post)
        //     .then( response => {
        //         console.log(response);
        //         this.props.history.push('/')
        //     })
        this.props.onCreatePost(post);
        setTimeout (() => {
            this.props.history.push('/')
        }, 100)

    }

    handleCatChange = (event) => {
        this.setState({category: event.target.value})
    }
    render(){
        return(
            <div>
                <div>
                <h1> Create a post </h1>
                <label>Title:   </label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <br/><label>Body:   </label>
                <textarea rows="4" value={this.state.body} onChange={(event) => this.setState({body: event.target.value})}/>
                <br/><label>Author: </label>
                <input type="text" value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}/>
                <br/><label>Category:   </label>
                <select value={this.state.category} onFocus={this.handleCatChange} onChange={this.handleCatChange}>
                    <option value="react">React</option>
                    <option value="redux">Redux</option>
                </select>
                </div>
                <button onClick={this.handlePost}>Create Post</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCreatePost: (postData) => dispatch(actionTypes.createPost(postData))
    }
}

export default connect(null, mapDispatchToProps)(CreatePost);