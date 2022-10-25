import React from 'react';
import classes from './Post.module.css';
import Likes from "./Likes";

const Post = (props) => {
    return (
        <div className={classes.item}>
            <div style={{display: "flex", height: 82}}>
            <img src='https://abrakadabra.fun/uploads/posts/2022-02/1644764716_1-abrakadabra-fun-p-avatarki-iz-pinteresta-estetichnie-1.png'></img>
            { props.message }
            </div>

            {/*<div>
                <span>like</span>
                { props.likeCounter }
            </div>*/}
            <Likes/>
        </div>
    )
}

export default Post;