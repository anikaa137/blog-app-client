import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { useHistory, useLocation } from "react-router";


// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
// }
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }

function Login() {
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        displayName: "",
        email: "",
        photoURL: "",
        name: "",
        password: "",
        confirm_password: "",
        error: "",
        success: false,
    });
    // console.log(user);

    const handleBlur = (event) => {
        let isFieldValid = true;
        if (event.target.name === "email") {
            isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
        }
        if (event.target.name === "password") {
            isFieldValid = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{6,}$/.test(
                event.target.value
            );
        }
        if (event.target.name === "confirm_password") {
            isFieldValid = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{6,}$/.test(
                event.target.value
            );
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }
    };
    const handleSubmit = (e) => {
        if (newUser && user.email && user.password === user.confirm_password) {
            firebase
                .auth()
                .createUserWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    const errorMessage = "";
                    const newUserInfo = { ...user };
                    newUserInfo.error = errorMessage;
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    // console.log(errorMessage);
                    // console.log(user.name);
                    updateUserName(user.name);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    const newUserInfo = { ...user };
                    newUserInfo.error = errorMessage;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                    console.log(errorMessage);
                });
        }
        if (!newUser && user.email && user.password) {
            firebase
                .auth()
                .signInWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    // Signed in
                    const errorMessage = "";
                    const newUserInfo = { ...user };
                    newUserInfo.error = errorMessage;
                    newUserInfo.success = true;
                    console.log(newUserInfo);
                    setUser(newUserInfo);
                    console.log("sign in user info ", res.user);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    const newUserInfo = { ...user };
                    newUserInfo.error = errorMessage;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                    console.log(errorMessage);
                });
        }
        e.preventDefault();
    };
    // update user info   => name ke firebase patanu
    const updateUserName = (name) => {
        console.log(name);
        const user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: name,
        })
            .then(function () {
                console.log("Update successful.");
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    // console.log(user.displayName);

    // for google signIn
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const googleSignIn = () => {
        firebase
            .auth()
            .signInWithPopup(googleProvider)
            .then((res) => {
                // console.log(res);
                console.log(res[0]);
                const { displayName, email, photoURL } = res.user;
                // console.log(displayName, email, photoURL);

                const signedInUser = {
                    isSignedIn: true,
                    displayName: displayName,
                    email: email,
                    photoURL: photoURL,
                };
                setUser(signedInUser);
                setLoggedInUser(signedInUser);
                history.replace(from);
            })
            .catch((error) => {
                console.log(error);
            });
    };

 // console.log(user);

  return (
    <div>
            <div class="d-flex justify-content-center">
                <Form onSubmit={handleSubmit}>
                    <h1 class="mt-5">
                        {newUser ? "create an account" : "Sign In"}
                    </h1>{" "}
                    <br />
                    <Form.Group controlId="formBasicEmail">

                            <Form.Control
                                type="text"
                                name="name"
                                onBlur={handleBlur}
                                onFocus={handleBlur}
                                placeholder="your name"
                                required

                            />

                  </Form.Group>
                  <br />
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control
                            type="email"
                            name="email"
                            onBlur={handleBlur}
                            onFocus={handleBlur}
                            placeholder="your email"
                            required
                        />
                  </Form.Group>
                  <br />
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control
                            type="password"
                            name="password"
                            onBlur={handleBlur}
                            placeholder="password"
                            required
                        />
                  </Form.Group>
                  <br />
                    {newUser && (
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control
                                type="password"
                                name="confirm_password"
                                onBlur={handleBlur}
                                placeholder="confirm_password"
                                required
                            />
                        </Form.Group>
                  )}
                  <br />
                    <Button type="submit">
                        {newUser ? "Sign up" : " Sign In"}
                  </Button>
                  <br /><br />
                    <Form.Group>
                        <label htmlFor="newUser">
                            {newUser
                                ? "Already have an account ?"
                                : "Don't Have an Account ?"}{" "}
                        </label>
                        <button
                            style={{
                                background: "none",
                                color: "red",
                                outline: "none",
                                border: "none",
                                textDecoration: "underline",
                                fontSize: "20px",
                            }}
                            onClick={() => setNewUser(!newUser)}
                            name="newUser"
                        >
                            {newUser ? "signIn" : "create an account"}
                        </button>
                  </Form.Group>
                  <br /> <br />
                    <Form.Group>
                        <button
                            onClick={googleSignIn}
                            type="button"
                            class="btn btn-outline-success"
                        >
                            <FontAwesomeIcon icon={faFacebook} />
                            <span class="p-4">Continue with Google</span>
                        </button>
                    </Form.Group>
                </Form>
            </div>

            {user.success ? (
					<h2 style={{ color: "green" }}>
                    {" "}
                    user {newUser ? "created" : "Sign In"} successfully
                </h2>
            ) : (
				  <h5 style={{ color: "red" }}> {user.error}</h5>

            )}
        </div>
    );
}

export default  Login;