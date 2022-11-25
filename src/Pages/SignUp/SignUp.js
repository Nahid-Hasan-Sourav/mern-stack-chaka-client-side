import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const handleSubmit=(e)=>{
    e.preventDefault();
    const form=e.target
    const name=form.name.value;
    const email=form.email.value;
    const password=form.password.value;
    const image=form.image.files[0];
    const userRole=form.role.value;

    const userInfo={
      name,
      email,
      password,
      image,
      userRole
    }
    console.log("User Info",userInfo)
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
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignUp;