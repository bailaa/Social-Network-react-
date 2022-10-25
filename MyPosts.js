import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {updateNewPostText} from "../../../redux/state";

const MyPosts = (props) => {

    let postsElements =
        props.postsData.map(post => <Post message={post.message} likeCounter={post.likeCounter}/>)

    let newPostElement = React.createRef();  // react верни ссылку на новые данные

    let addPost = () => {
        debugger
        // ф-я, откуда мы достаем данные пришедшие по ссылке
        // отслеживаем из-е сост-я в поле для ввода, что туда приходит новый элемент
        props.addPost();
        props.updateNewPostText('');
        // на кнопку вешаем обработчик события с фун-й добавления нового поста с новыми данными
        // props.addPost(text) это callback-фун-я,потому мы что вызываем через props?
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
            <div className={classes.myPostBlock}>
                <h3>My posts</h3>
                <div>
                    New post
                    <div>
                        <textarea onChange={onPostChange} ref={newPostElement}
                        value={props.newPostText}/>
                    </div>
                    <button onClick={ addPost }>Add post</button>
                    <button>Remove</button>
                </div>
                <div className={classes.posts}>
                    {postsElements}
                </div>
            </div>
    )
}

export default MyPosts;