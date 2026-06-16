"use client";
import scss from "./login.module.scss";
import { FiUser } from "react-icons/fi";
import { CiLock } from "react-icons/ci";
import { FaCircle } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useState } from "react";

interface IForm {
  usename: string;
  password: number;
}

const Login = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { handleSubmit, reset, register } = useForm<IForm>();
  const disabled: any = {
    userName,
    password,
  };
  const handleData = (data: IForm) => {
    reset();
  };
  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <div className={scss.mainLogin}>
            <div className={scss.info}>
              <h1>LOGIN</h1>
              <h4>Welcome Back to Our Site</h4>
            </div>
            <form onSubmit={handleSubmit(handleData)} className={scss.inp}>
              <div className={scss.username}>
                <input
                  {...register("usename")}
                  onChange={(e) => setUserName(e.target.value)}
                  type="text"
                  placeholder="Username or Email"
                />
                <span>
                  <FiUser />
                </span>
              </div>
              <div className={scss.password}>
                <input
                  {...(register("password"), { required: true })}
                  onChange={(e) => setPassword(e.target.value)}
                  type="text"
                  placeholder="Password"
                />
                <span>
                  <CiLock />
                </span>
              </div>
              <div className={scss.h5}>
                <h5>Forgot Password?</h5>
                <button
                  style={{
                    cursor: disabled.userName ? "pointer" : "not-allowed",
                  }}
                  disabled={!disabled}
                  type="submit"

                >
                  LOG IN
                </button>
              </div>
            </form>
            <div className={scss.images}>
              <p>______________</p>
              <span>
                <FaCircle />
              </span>
              <span className={scss.center}>
                <FaCircle />
              </span>
              <span>
                <FaCircle />
              </span>
              <p>______________</p>
            </div>
            <div className={scss.login}>
              <p>
                Don`t have an account? <span>Sign Up Now</span>
              </p>
              <h6>Or log in with:</h6>
              <div className={scss.icons}>
                <span>
                  <FaGoogle />
                </span>
                <span>
                  <FaFacebook />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
