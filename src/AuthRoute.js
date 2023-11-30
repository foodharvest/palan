import React, { useEffect, useState } from 'react';
import { Outlet, Navigate, useNavigate } from 'react-router-dom';
import firebase from './firebase-config';
import { userDataService } from "./services/service";
import Cookies from 'js-cookie';



const AuthRoute = (props) => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(async(user) => {
      if (user) {
        console.log("useruid:", user.uid);
        const userDoc =  await userDataService.getUserByUID(user.uid)
        if (userDoc.empty) {
          alert('User not found');
        }
        else {
          
          const userData = await userDoc.docs[0].data();
          console.log(userData);
          const role = await userData.role;
          console.log(role);
          console.log("userEmail:", userData.email);
          Cookies.set("userRole", role);
          Cookies.set("userEmail", userData.email);
          if(role === "hotel")
          {
            console.log("hotel");
            await props.setUserRole(role);
            navigate('/');
          }
          else if(role === "ngo")
          {
            console.log("ngo");
            await props.setUserRole(role);
            navigate('/ngo');
          }
          else if(role === "farmer")
          {
            console.log("farmer");
            await props.setUserRole(role);
            navigate('/farmer');
          }
          else if(role === "composter")
          {
            console.log("composter");
            await props.setUserRole(role);
            navigate('/composter');
          }
          else
          {
            console.log("else");
            await props.setUserRole(role);
            navigate('/login');
          }
        }

      
        setCurrentUser(user);
      }
      
    });

    return () => {
      unsubscribe(); // Unsubscribe the listener when the component unmounts
    };
  }, []);

  if (currentUser === null) {
    // Firebase is still checking the authentication state, you can show a loading spinner here
    return <center>Loading...</center>;
  }

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthRoute;
