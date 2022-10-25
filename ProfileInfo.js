import React from 'react';
import classes from './ProfileInfo.module.css';
/*import MyPosts from "./MyPosts/MyPosts";*/

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={classes.myImg} src='https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000'></img>
            </div>
            <div className={classes.descriptionBlock}>
                Ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;