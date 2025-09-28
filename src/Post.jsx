import React from 'react';
import './Post.css'


const Post = (props) =>{
    return(
        <div className='post'>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <img src={props.src} alt={props.alt} />
        </div>
    );
}


export default Post;