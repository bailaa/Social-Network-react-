import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/Nav/News/News";
import Music from "./components/Nav/Music/Music";
import Settings from "./components/Nav/Settings/Settings";
import store from "./redux/state";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Nav />
                <div className='app-wrapper-content'>
                    <Routes>
                        {/*<Route path='/dialogs' element={<Dialogs />} />
                        <Route path='/profile' element={<Profile />} />*/}

                        {/*<Route path='/dialogs' render={ () => <Dialogs /> } />
                        <Route path='/profile' render={ () => <Profile /> } />*/}

                        <Route path={'/dialogs/*'}
                               element={<Dialogs messagesData={props.state.messagesPage.messagesData}
                                                 dialogsData={props.state.messagesPage.dialogsData}/>}/>
                        <Route path={'/profile/*'}
                               element={<Profile postsData={props.state.profilePage.postsData}
                                                 profilePage={props.state.profilePage}
                                                 addPost={props.addPost}
                                                 updateNewPostText={props.updateNewPostText} />}/>
                        <Route path={'/news'} element={<News />}/>
                        <Route path={'/music'} element={<Music />}/>
                        <Route path={'/settings'} element={<Settings />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
