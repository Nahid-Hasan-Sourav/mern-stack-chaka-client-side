import React from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";

export const setAuthToken = (user) => {
  // const {logOut}=useContext(AuthContext);
  const currentUser = {
    email: user.email,
    role: user.role,
    name: user.name,
    image: user.image,
  };

  console.log("This is from auth function", currentUser);

  // save user in db and get the token
  fetch(`https://a-12-chakka-server-side.vercel.app/user/${user.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("chaka-token")}`,
      },
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("This is from auth.js function", data);
      // if(data.message==='Forbidden access' || data.message==='unauthorized access'){
      //     logOut();
      // }
      // save token in local storage
      localStorage.setItem("chaka-token", data.token);
    });
};
