import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { getImageUrl } from '../../Api/imageUpload';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';
import { setAuthToken } from '../../Api/auth';

const SignUp = () => {
  
  const [erros, setErrors] = useState("");
 
  const navigate=useNavigate()
  const {createUser,providerLogin,updateUserProfile}=useContext(AuthContext)
  const location = useLocation();
  const fromss = location.state?.from?.pathname || "/";
  const googleProvider =new GoogleAuthProvider()
  const handleSubmit=(e)=>{
    e.preventDefault();
    const form=e.target
    const name=form.name.value;
    const email=form.email.value;
    const password=form.password.value;
    let image=form.image.files[0];
    const userRole=form.role.value;

   console.log("Check for image",image)
    getImageUrl(image)
  
    .then(imgData=>{
      
      // if(imgData.success){
      //   let userInfo={
      //     name,
      //     email,
      //     password,
      //     image:imgData.data.url,
      //     userRole
      //   }
      //   console.log(userInfo)
      // }
      let userInfo={
        name,
        email,
        image:imgData.data.url,
        role:userRole
      }

      createUser(email, password)
      .then(result=>{
        const user=result.user;
        // send userinfo in setAuthToken function
        setAuthToken(userInfo)
        // console.log("Before uodate user",user)

        updateUserProfile(name,imgData.data.url)
        .then(() => {})
       .catch((error) => console.error(error));
        // console.log(user)
        
        setErrors("");
        toast.success("Successfully complete the registration")
        form.reset()
        setTimeout(() => {
          navigate('/')
        }, "1000")
      })
      .catch(error=>{
        console.log(error);
        setErrors(error.message)
      })
      
      
    })
   
    
  
  }

  const handleGoogleSignin=()=>{
    providerLogin(googleProvider)
    .then((result) => {
      const user = result.user;
      const googleUserSignin = {
        email:user.email,
        role:"user",
        name:user.displayName,
        image:user.photoURL
      }
      setAuthToken(googleUserSignin)

      navigate(fromss, { replace: true });
    })
    .catch((error) => {
      console.error(error);
    });
  }
    return (
      <div className="hero min-h-screen bg-base-200 py-10">
        <div className="hero-content max-w-md">
          <div className="card  w-full  shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name='name'
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name='email'
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name='password'
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label htmlFor="image" className="block mb-2 text-sm">
                  Select Image:
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  required
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Sign Up As A ?</span>
                </label>
                <select className="select select-bordered" name='role'>
                  <option value="user" selected>
                    User
                  </option>
                  <option  value="seller">Seller</option>
                </select>
              </div>
              <p className='text-red-700 font-bold'>{erros}</p>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
              <p className='mt-2'>Already Have an account please <Link to='/login' className='text-blue-500'> Login</Link></p>
              <div className="divider">OR</div>
              
            </form>
            <div className="form-control mt-6 mx-6 mb-3">
                <button className="btn btn-" onClick={handleGoogleSignin}><FcGoogle className='mr-2 text-2xl font-bold'/> Sign With Google</button>
              </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;