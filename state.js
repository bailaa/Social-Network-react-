import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "../App";
import React from "react";
// метод это функция, которая принадлжеит объекту
// this - способ обращения к свойству объекта
let store = {
    _state: {
        profilePage: {
            postsData:[
                {id: 1, message: 'Hi, how are you?', likeCounter: '15'},
                {id: 2, message: 'It is my first post', likeCounter: '20'}
            ],
            newPostText: 'it-kamasutra.com'
        },
        messagesPage: {
            messagesData:[
                {id: 1, message: 'Hi!'},
                {id: 2, message: 'How is your study?!'},
                {id: 3, message: 'We have to kill Cole'}
            ],
            dialogsData:[
                {id: 1, name: 'Prue'},
                {id: 2, name: 'Piper'},
                {id: 3, name: 'Phoebe'},
                {id: 4, name: 'Paige'}
            ],
        }
    },
    getState() {
        return this._state;
    },

    rerenderEntireTree() {
        console.log('State is changed');
    },

    addPost() {
        debugger
        let newPost = {
            id: 3,
            message: this.state.profilePage.newPostText,
            likesCount: 0
        };
        this.state.profilePage.postsData.push(newPost);
        this.state.profilePage.newPostText = '';
        this.rerenderEntireTree(this._state);
    },

    updateNewPostText(newText) {
        this.state.profilePage.newPostText = newText;
        this.rerenderEntireTree(this._state);
    },

    subscribe(observer) {
        this.rerenderEntireTree= observer;
    }
}


window.state = store;
    /*state.profilePage.postsData.push(newPost); // через все дерево через props опрокидываем нашу функцию
}*/
export default store;

/*export class updateNewPostText {
}*/