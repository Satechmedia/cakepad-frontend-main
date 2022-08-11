import React, { useState } from "react";
import styles from "./Login.module.scss";

import { useRouter } from "next/router";
import { Insect } from "react-insect";
import { Logo, Loader, Button } from "@/shared";

import { API, SIGNUP, LOGIN } from "@/api";
import { useGlobalState } from "@/context";
import { setToken } from "@/context/admin";

const signUpData = {
  firstName: "Dev",
  lastName: "Testing",
  email: "techkadet@gmail.com",
  password: "caketoolsdev",
  confirmPassword: "caketoolsdev",
};

const defaultErrors = {
  email: {
    status: false,
    message: "Invalid Email",
  },
  password: {
    status: false,
    message: "Incorrect Password",
  },
};

const Login = () => {
  const router = useRouter();
  const [, dispatch] = useGlobalState();
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState(defaultErrors);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setErrors(defaultErrors);
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const signIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      const { data } = await API.post<{ token: string }>(LOGIN, formData);

      const token = data?.token;

      dispatch(setToken(token));
      localStorage.setItem("cakepad_token", token);

      setLoading(false);
      router.push("/admin/dashboard")
    } catch (error) {
      console.log(error);
      setLoading(false);
      setErrors({
        email: {
          status: true,
          message: "Invalid Email Or Password",
        },
        password: {
          status: true,
          message: "Invalid Email Or Password",
        },
      });
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.login_logo}>
        <Logo type="mixed-light" />
      </div>
      <form onSubmit={signIn} className={styles.login_form}>
        <div className={styles.login_formrow}>
          <Insect
            name="email"
            type="email"
            label="Email Address"
            placeholder="hello@cakepad.io"
            onChange={onChange}
            value={formData.email}
            labelClass={styles.login_inputlabel}
            inputWrapperClass={
              styles[
                errors.email.status
                  ? "login_inputwrapper__error"
                  : "login_inputwrapper"
              ]
            }
            inputClass={styles.login_inputfield}
          />
          <small data-show={errors.email.status}>{errors.email.message}</small>
        </div>

        <div className={styles.login_formrow}>
          <Insect
            name="password"
            type="password"
            label="Password"
            placeholder="password"
            onChange={onChange}
            value={formData.password}
            labelClass={styles.login_inputlabel}
            inputWrapperClass={
              styles[
                errors.password.status
                  ? "login_inputwrapper__error"
                  : "login_inputwrapper"
              ]
            }
            inputClass={styles.login_inputfield}
          />
          <small data-show={errors.password.status}>
            {errors.password.message}
          </small>
        </div>

        <Button
          type="gold-brown"
          onClick={() => null}
          className={styles.login_button}
        >
          {loading ? ". . ." : "Sign In"}
        </Button>
      </form>
    </div>
  );
};

export default Login;
