import React from 'react'; 
import { GoogleOutlined, GithubOutlined } from '@ant-design/icons';
import * as firebase from 'firebase';
import "firebase/app";

import { auth } from '../firebase';

const Login = () =>{
    return(
        <div id="login-page">
             <h1 className="login-head">Welcome To Unitech</h1>
            <div id="login-card">
                <div className="login-button google"
                 onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}   
                >
                        <GoogleOutlined /> Sign in with Google
                </div>
                <br /><br />
                <div className="login-button facebook"
                 onClick={() => auth.signInWithRedirect(new firebase.auth.GithubAuthProvider())}
                >
                        <GithubOutlined /> Sign in with Github
                </div>
            </div>
        </div>
    );
}

export default Login;