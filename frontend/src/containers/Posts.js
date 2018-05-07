import React, { Component } from 'react';
import axios from '../axios-instance';
import Post from './Post';

import { connect } from 'react-redux';
import * as actionTypes from '../store/actions/actionTypes';

class Posts extends Component {
    state = {
        categories: ['react', 'redux'],
        voteSort: false,
        dateSort: false,
        reactOnly: false,
        reduxOnly: false
    }

    componentDidMount() {
        // axios.get('/posts')
        //     .then(response => {
        //         const posts = response.data;
        //         const spreadPost = posts.map(post => {
        //             return {
        //                 ...post
        //             }
        //         })
        //         this.setState({ posts: spreadPost })
        //     })
        this.props.onInitPosts();
        
    }

    handleCreate = () => {
        this.props.history.push('/create');
    }

    handleDelete = (id) => {
        axios.delete('./posts/'+id);
        window.location.reload();
    }

    handleEdit = (id) => {
        this.props.history.push('/edit/'+id)
    }

    filterHandler = (type) => {
        if(type === 'react'){
            this.setState({reactOnly:!this.state.reactOnly})
            this.setState({reduxOnly: false})
        }else if(type === 'redux'){
            this.setState({reduxOnly:!this.state.reduxOnly})
            this.setState({reactOnly: false})
        }
    }

    dateSortHandler = () => {
        this.setState({dateSort:!this.state.dateSort})
        this.setState({voteSort: false})
    }

    voteSortHandler = () => {
        this.setState({voteSort:!this.state.voteSort})
        this.setState({dateSort: false})
    }

    render() {
        let posts = [];
        posts = this.props.posts.map(post => {
            if (!post.deleted) {
                return (
                    <Post
                        key={post.id}
                        title={post.title}
                        category={post.category}
                        author={post.author}
                        date={post.timestamp}
                        vote={post.voteScore} 
                        clicked={() => this.handleDelete(post.id)}
                        toEdit={() => this.handleEdit(post.id)}/>
                )
            }
        })

        if(this.state.reactOnly){
            posts = posts.filter(item => item.props.category === 'react');
        }

        if(this.state.reduxOnly){
            posts = posts.filter(item => item.props.category === 'redux');
        }

        if(this.state.voteSort){
            posts = posts.sort((item1,item2) => item1.props.vote <= item2.props.vote)
        }

        if(this.state.dateSort){
            posts = posts.sort((item1, item2) => item1.props.date <= item2.props.date)
        }
        
        return (
            <div>
                <h1>Categories</h1>
                <ul>
                    <li><a href='/'>All</a></li>
                    <li onClick={() => this.filterHandler('react')}>React</li>
                    <li onClick={() => this.filterHandler('redux')}>Redux</li>
                </ul>
                <hr />
                <h1> Posts </h1>
                <button onClick={this.voteSortHandler}>Sort By Vote</button>
                <button onClick={this.dateSortHandler}>Sort By Date</button>
                <button onClick={this.handleCreate}>Create Post</button>
                <hr />
                {posts}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        posts: state.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInitPosts: () => dispatch(actionTypes.initPosts())
    }
}


export default connect( mapStateToProps, mapDispatchToProps )(Posts);