import React from 'react';

const post = (props) => {
    return (
        <div>
            <h1>Title: {props.title}</h1>
            <h1>Category: {props.category}</h1>
            <p> Author: {props.author}  Post Date: {props.date}  Vote Score: {props.vote}</p>
            <div>
                <button onClick={props.clicked}>Delete Post</button>
                <button onClick={props.toEdit}>Edit Post</button>
                <button>View Post</button>
            </div>
            <hr />
        </div>
    )
}


export default post;