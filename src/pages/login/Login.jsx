import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { BsGoogle, BsTextCenter } from "react-icons/bs";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import loginImg from "../../assets/others/authentication1.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

const Login = () => {
  const [show, setShow] = useState(false);
  const [disable, setDisable] = useState(true);
  const [error,setError] = useState('')
  const captchaRef = useRef(null);
  const { singInUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    singInUser(email, password).then(() => {
      toast.success("Successfully Login");
      navigate(location.state ? location.state : '/')
    })
    .catch(error=>setError(error.message))
  };

  const handleGoogleSing = () => {
    console.log("Google");
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };
  return (
    <>
      <Helmet>
        <title>Bistro | Login</title>
      </Helmet>
      <div className="md:flex justify-center items-center min-h-screen">
        <div className="md:w-1/2">
          <img src={loginImg} alt="" />
        </div>
        <div className="md:w-2/6 mx-auto border  rounded shadow-md shadow-gray-300 p-5">
          <h1 className="text-2xl font-medium mb-5 text-center text-orange-400">
            LOGIN
          </h1>
          <form onSubmit={handleLogin}>
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
              <span
                onClick={() => setShow(!show)}
                className="absolute right-10"
              >
                {show ? (
                  <AiOutlineEye className="text-2xl"></AiOutlineEye>
                ) : (
                  <AiOutlineEyeInvisible className="text-2xl"></AiOutlineEyeInvisible>
                )}
              </span>
            </div>
            <div className="mb-4">
              <label>
                <LoadCanvasTemplate />
              </label>
              <div className="flex items-center justify-center">
                <p>
                  <BsTextCenter className="text-2xl"></BsTextCenter>
                </p>
                <input
                  type="text"
                  name="captcha"
                  ref={captchaRef}
                  id=""
                  placeholder="Type the captcha above"
                  required
                  className="w-3/4 mx-auto py-1 px-2 bg-transparent border-b border-b-orange-400 "
                />
              </div>
              <p
                onClick={handleValidateCaptcha}
                className="btn btn-outline btn-sm mt-3 "
              >
                validate
              </p>
            </div>
            <input
              disabled={disable}
              type="submit"
              value="Login"
              className=" w-full btn  btn-outline btn-warning"
            />
            <p>
              Do not have account?{" "}
              <Link to="/singUp" className="btn btn-link">
                Sing Up
              </Link>
            </p>
            <p className="text-xl text-red-700">{error}</p>
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
    </>
  );
};

export default Login;
