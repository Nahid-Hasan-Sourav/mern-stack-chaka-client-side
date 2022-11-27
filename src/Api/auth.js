
export const setAuthToken=user=>{
    const currentUser={
        email:user.email,
        role:user.role,
        name:user.name,
        image:user.image
    }

    console.log("This is from auth",user)

    // save user in db and get the token
    fetch(`http://localhost:5000/user/${user.email}`,{
        method: 'PUT',
        headers:{
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser)
    })
    .then(res=>res.json())
    .then((data)=>{
        console.log("This is from auth.js ",data)

        // save token in local storage
        localStorage.setItem('chaka-token',data.token)
    })
}