import React, { useState } from 'react';
import './signup.css';
import { Link, useNavigate } from 'react-router-dom';
import firebase from '../../firebase-config';
import { userDataService } from '../../services/service';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [role, setRole] = useState('');
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
            if (userCredential && userCredential.user) {
                const user = userCredential.user;

                // Send verification email
                await user.sendEmailVerification();

                const { uid } = user;
                const datatofirestore = await userDataService.addUser({
                    uid,
                    name,
                    email,
                    role
                });
                console.log(datatofirestore);
                alert("Account Created Successfully. Please check your email for verification.");
                navigate('/login');
            }
        } catch (error) {
            alert(error.message);
        }
    };
    
  return (
    <>
    <div className='main_container_signup'>
        <div className='header'>
            <h2>Signup</h2>
        </div>
        <div className='box'>
            <input type='text' value={name} placeholder='Username' onChange={(e)=> setName(e.target.value)}></input>
        </div>
        <div className='box'>
            <input type='email' value={email} placeholder='E-mail' onChange={(e)=> setEmail(e.target.value)} ></input>
        </div>
        <div className='box'>
            <input type='password' value={password} placeholder='Password' onChange={(e)=> setPass(e.target.value)} ></input>
        </div>
        <div className='box'>
            <select required value={role} onChange={(e)=> setRole(e.target.value)}>
                <option value="select"  >---Select Role---</option>
                <option value="hotel">Hotel</option>
                <option value="farmer">Farmer</option>
                <option value="ngo">NGO</option>
                <option value="composter">Composter</option>
            </select>
        </div>
        <p>Already Have an account <Link to="/login"> Login Now</Link></p>
        <button onClick={submit}>Signup</button>
    </div>
    </>
  )
}

export default Signup