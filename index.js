import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {updateNewPostText} from "./redux/state";
import { addPost } from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import store from "./redux/state";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} // {store.getState()}
                 addPost={store.addPost.bind(store)}
                // Обычно bind применяется для фиксации this в методе объекта,
                  // чтобы передать его в качестве колбэка
                 updateNewPostText={store.updateNewPostText.bind(store)} />
        </BrowserRouter>, document.getElementById('root')
    );}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

/* addPost('Hello, samurai') // чтобы новый пост из ui отправленный в bll был отрендерен на стене,
// необходимо понять. что данные приходят, но дерево отрисовывается один раз,
//  и наша задача перерсовать дерево, но только его часть. для этого и нужен virtual DOM?
// ui должен перерисовываться каждый раз, когда в bl происходят изменения
// наша задача при отлавливании изменения состояния в ui,
// отправить это действие в bl и наоборот

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App state={state} addPost={addPost}
        /*postsData={postsData}
        messagesData={messagesData}
        dialogsData={dialogsData}
    />
  </React.StrictMode>
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
