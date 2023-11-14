import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { BsGoogle, BsPeople} from "react-icons/bs";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import loginImg from '../../assets/others/authentication1.png'
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

const SingUp = () => {
    const [show, setShow] = useState(false);
    const {createUser} = useAuth();

    const handleSingUp = e =>{
        e.preventDefault();
        const form = e.target;
        // const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email,password)
        .then(result=>{
            console.log(result.user)
        })
    }

    const handleGoogleSing = ()=>{
        console.log("google")
    }
    return (
        <div className="md:flex md:flex-row-reverse justify-center items-center min-h-screen">
        <div className="md:w-1/2">
            <img src={loginImg} alt="" />
        </div>
      <div className="md:w-2/6 mx-auto border  rounded shadow-md shadow-gray-300 p-5">
        <h1 className="text-2xl font-medium mb-5 text-center text-orange-400">
          LOGIN
        </h1>
        <form onSubmit={handleSingUp}>
        <div className="flex items-center mb-5 ">
            <label>
              <BsPeople className="text-2xl"></BsPeople>
            </label>
            <input
              type="text"
              name="name"
              id=""
              placeholder="Your Name"
              required
              className="w-3/4 mx-auto py-1 px-2 bg-transparent border-b border-b-orange-400"
            />
          </div>
          <div className="flex items-center mb-5 ">
            <label>
              <AiOutlineMail className="text-2xl"></AiOutlineMail>
            </label>
            <input
              type="email"
              name="email"
              id=""
              placeholder="Your Email"
              required
              className="w-3/4 mx-auto py-1 px-2 bg-transparent border-b border-b-orange-400"
            />
          </div>
          <div className="flex items-center mb-5 relative">
            <label>
              <RiLockPasswordLine className="text-2xl"></RiLockPasswordLine>
            </label>
            <input
              type={show ? "text" : "password"}
              name="password"
              id=""
              placeholder="Password"
              required
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
          <p className="text-xl text-red-700"></p>
          <fieldset className="mt-5 border rounded border-orange-400 p-2">
            <legend className="text-center text-xl text-orange-400">
              LOGIN WITH
            </legend>
            <p onClick={handleGoogleSing}>
              <BsGoogle className="text-2xl text-blue-500 cursor-pointer"></BsGoogle>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
    );
};

export default SingUp;