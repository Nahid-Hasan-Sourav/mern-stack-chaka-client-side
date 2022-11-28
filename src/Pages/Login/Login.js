import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { setAuthToken } from '../../Api/auth';
const Login = () => {
  const {signIn,providerLogin,logOut}=useContext(AuthContext)
  const [loginError,setloginError]=useState()
  const navigate = useNavigate()
  const location = useLocation();
  const fromss = location.state?.from?.pathname || "/";
  const googleProvider =new GoogleAuthProvider()
  const handleLogin=(e)=>{
      e.preventDefault()
      const form=e.target;
      const email=form.email.value;
      const password=form.password.value;
      console.log("Email && Pass",email,password);
      signIn(email, password)
      .then(result=>{
        const user=result.user;
        const googleUserSignin = {
          email:user.email,        
          name:user.displayName,
          image:user.photoURL
        }
        setAuthToken(googleUserSignin)
        console.log("sign in user",user)
        form.reset()
        navigate(fromss, { replace: true });
      })
      .catch(err=>{
        setloginError(err.message)
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
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content max-w-md">
          <div className="card  w-full  shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name='email'
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name='password'
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <p className='text-red-700 font-bold'>{loginError && loginError}</p>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type='submit'>Login</button>
              </div>
              <p>Don't Have an account please  <Link to='/signUp' className='text-blue-500'>signUp</Link></p>
              <div className="divider">OR</div>
              
            </form>
            <div className="form-control mt-6 mx-6 mb-3">
                <button className="btn btn-"  onClick={handleGoogleSignin}><FcGoogle className='mr-2 text-2xl font-bold'/> Sign With Google</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;