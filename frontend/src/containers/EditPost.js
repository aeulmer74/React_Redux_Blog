import React, { Component } from 'react';
//import axios from '../axios-instance';

import { connect } from 'react-redux';
import * as actionTypes from '../store/actions/actionTypes';

class Edit extends Component {
    state = {
        postDetails: {},
        title: '',
        body: ''
    }
    componentDidMount() {
        // axios.get('/posts/' + this.props.id)
        //     .then(response => {
        //         this.setState({ postDetails: response.data });
        //         this.setState({title: this.state.postDetails.title, body: this.state.postDetails.body})
        //     })
        const editPostId = this.props.id;
        this.props.onFetchPost(editPostId);
    }

    updatePost = (id) => {
        const update = {
            title: this.state.title,
            body: this.state.body
        }
        // axios.put('/posts/'+id, update)
        //     .then(response => response.data)
        // this.props.history.push('/')
        
        this.props.onEditPost(id, update);
        setTimeout (() => {
            this.props.history.push('/')
        }, 100)
    }   

    render() {
        
        return (
            <div>
                <h1>Edit Post</h1>
                <label>Title:   {this.props.postDetails.title}</label><br/>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})}/>
                <br/><label>Body:   {this.props.postDetails.body}</label><br/>
                <textarea rows="4" value={this.state.body} onChange={(event) => this.setState({body: event.target.value})}/>
                <br/><label>Author:   {this.props.postDetails.author}</label>
                <br/><label>Category:   {this.props.postDetails.category}</label><br/>
                <button onClick={() => this.updatePost(this.props.id)}>Update Post</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
       postDetails: state.singlePost,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchPost: (id) => dispatch(actionTypes.fetchOnePost(id)),
        onEditPost: (id, update) => dispatch(actionTypes.editPost(id,update))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);