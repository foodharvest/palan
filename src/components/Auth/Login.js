import React, { useState } from 'react'
import './signup.css'
import { Link, useNavigate } from 'react-router-dom'
import firebase from '../../firebase-config'
import { userDataService } from '../../services/service'
import Cookies from "js-cookie";

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPass] = useState('')
    const Navigate = useNavigate();


    const submit = async (e) => {
        e.preventDefault()
        try {
            const user = await firebase.auth().signInWithEmailAndPassword(email, password)

            console.log(user.user.uid)

            if (user && user.user) {

              if (!user.user.emailVerified) {

                await user.user.sendEmailVerification();

                alert('Please verify your email before logging in. The new Link to verify is send to the email you provided during signup.');
                return; 
            }
              
                const userDoc = await userDataService.getUserByUID(user.user.uid)

                console.log(userDoc.docs[0].data())
                

                if (userDoc.empty) {
                    alert('User not found');
                  } else {
                    // Access the first document in the snapshot
                    const userData = userDoc.docs[0].data(); // Grab the data of the first document
            
                    if (userData) {
                      const role = userData.role;
                      props.setUserRole(role);

                      Cookies.set("userRole", role);
            
                      // Redirect based on role
                      if (role === 'hotel') {
                        Navigate('/');
                      } else if (role === 'farmer') {
                        Navigate('/farmer');
                      } else if (role === 'ngo') {
                        Navigate('/ngo');
                      } else if (role === 'composter') {
                        Navigate('/composter');
                      } else {
                        Navigate('/');
                      }
                    } else {
                      alert('User data not available');
                    }

                }
               
            }
        }
        catch (error) {
            alert(error)
        }
    }
    return (
        <>
            <div className='main_container_signup'>
                <div className='header'>
                    <h2>Signup</h2>
                </div>
                <div className='box'>
                    <input type='email' value={email} placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} ></input>
                </div>
                <div className='box'>
                    <input type='password' value={password} placeholder='Password' onChange={(e) => setPass(e.target.value)} ></input>
                </div>
                <p>Don't Have an Account?<Link to="/signup"> Create Account</Link></p>
                <button onClick={submit}>Login</button>

            </div>
        </>
    )
}
export default Login