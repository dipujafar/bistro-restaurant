import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlinePhotograph } from "react-icons/hi";
import {BsPeople } from "react-icons/bs";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import loginImg from '../../assets/others/authentication1.png'
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { toast } from 'react-toastify'
import useAxiosPublic from "../../hooks/useAxiosPublic";

import GoogleLogin from "../../Components/socialMedia/GoogleLogin";

const SingUp = () => {
  const [show, setShow] = useState(false);
  const { createUser, updateUser } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password, name, photo } = data || {}
    createUser(email, password)
      .then(() => {
        updateUser(name, photo)
          .then(() => {
            const userInfo = {
              email,
              name
            }
            axiosPublic.post('/users', userInfo)
              .then(res => {
                if (res.data.insertedId) {
                  toast.success("Successfully sing Up");
                  reset();
                  navigate('/');
                }
              })
          })
          .catch(error => setError(error.message))
      })
      .catch(error => setError(error.message))
  };
  return (
    <>
      <Helmet>
        <title>Bistro | Sing Up</title>
      </Helmet>
      <div className="md:flex md:flex-row-reverse justify-center items-center min-h-screen">
        <div className="md:w-1/2">
          <img src={loginImg} alt="" />
        </div>
        <div className="md:w-2/6 mx-auto border  rounded shadow-md shadow-gray-300 p-5">
          <h1 className="text-2xl font-medium mb-5 text-center text-orange-400">
            Sing Up
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center mb-5 ">
              <label>
                <BsPeople className="text-2xl"></BsPeople>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                name="name"
                id=""
                placeholder="Your Name"
                className="w-3/4 mx-auto py-1 px-2 bg-transparent border-b border-b-orange-400"
              />

            </div>
            {errors.name?.type === 'required' && <span className="text-red-400 ml-10">Name is required</span>}
            <div className="flex items-center mb-5">
              <label>
                <HiOutlinePhotograph className="text-2xl"></HiOutlinePhotograph>
              </label>
              <input
                type="text"
                name="photo"
                {...register("photo", { required: true })}
                id=""
                placeholder="Photo URL"
                className="w-3/4 mx-auto py-1 px-2 bg-transparent border-b border-b-orange-400"
              />
            </div>
            {errors.photo?.type === "required" && <span className="text-red-400 ml-10">Photo is required</span>}

            <div className="flex items-center mb-5 ">
              <label>
                <AiOutlineMail className="text-2xl"></AiOutlineMail>
              </label>
              <input
                type="email"
                name="email"
                {...register("email", { required: true })}
                id=""
                placeholder="Your Email"
                className="w-3/4 mx-auto py-1 px-2 bg-transparent border-b border-b-orange-400"
              />
            </div>
            {errors.email?.type === "required" && <span className="text-red-400 ml-10">Email is required</span>}

            <div className="flex items-center mb-5 relative">
              <label>
                <RiLockPasswordLine className="text-2xl"></RiLockPasswordLine>
              </label>
              <input
                type={show ? "text" : "password"}
                name="password"
                {...register("password", { required: true, minLength: 6, maxLength: 20 })}
                id=""
                placeholder="Password"
                className="w-3/4 mx-auto py-1 px-2 bg-transparent border-b border-b-orange-400"
              />
              <span onClick={() => setShow(!show)} className="absolute right-10">
                {show ? (
                  <AiOutlineEye className="text-2xl"></AiOutlineEye>
                ) : (
                  <AiOutlineEyeInvisible className="text-2xl"></AiOutlineEyeInvisible>
                )}
              </span>
            </div>
            {errors.password?.type === "required" && <span className="text-red-400 ml-10">Password is required</span>}
            {errors.password?.type === "minLength" && <span className="text-red-400 ml-10">Password must be 6 character.</span>}
            {errors.password?.type === "maxLength" && <span className="text-red-400 ml-10">Password must less then 20 character.</span>}
            <input
              type="submit"
              value="Sing Up"
              className=" w-full btn  btn-outline btn-warning"
            />
            <p>
              Already have account?{" "}
              <Link to="/login" className="btn btn-link">
                Login
              </Link>
            </p>
            <p className="text-xl text-red-700">{error}</p>
            <p className="text-xl text-red-700"></p>
            <fieldset className="mt-5 border rounded border-orange-400 p-2">
              <legend className="text-center text-xl text-orange-400">
                LOGIN WITH
              </legend>
              <GoogleLogin></GoogleLogin>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
};

export default SingUp;