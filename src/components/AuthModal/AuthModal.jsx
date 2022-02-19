import * as React from "react";
import styles from "./AuthModal.module.css";
import { Modal, Backdrop } from "@mui/material";

import { AuthContext } from "../../stores/AuthContext";

import OutlinedButton from "../OutlinedButton/OutlinedButton";
import VerificationCode from "../VerificationCode/VerificationCode";
import StyledInput from "../StyledInput/StyledInput";

import { Formik } from "formik";
import * as Yup from "yup";

const LoginFormValidation = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email Address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be 8 characters or longer")
    .required("Password is required"),
});

const SignUpFormValidation = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email Address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be 8 characters or longer")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password must match")
    .required("Password must match"),
});

const ConfirmSignUpFormValidation = Yup.object().shape({
  code: Yup.string()
    .min(6, "Please enter 6 digits")
    .max(6, "Please enter only 6 digits")
    .required("Please enter the confirmation code"),
});

const ForgotPasswordFormValidation = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email Address")
    .required("Email is required"),
});

function LoginForm(props) {
  const { signIn, setAuthState } = React.useContext(AuthContext);

  return (
    <div>
      <h3 style={{ marginTop: 0, marginBottom: 20 }}>{"Log In"}</h3>
      <Formik
        initialValues={{ email: "", password: "" }}
        validateOnMount={true}
        validationSchema={LoginFormValidation}
        onSubmit={(values, actions) => {
          signIn(values.email, values.password, actions);
        }}
      >
        {({ handleChange, values, handleSubmit, errors, touched }) => (
          <div>
            <StyledInput
              className={styles.input}
              placeholder="Email"
              size="small"
              type="email"
              value={values.email}
              onChange={handleChange("email")}
            />
            {touched.email && errors.email && (
              <p className={styles.errorText}>{errors.email}</p>
            )}
            <StyledInput
              className={styles.input}
              placeholder="Password"
              size="small"
              type="password"
              value={values.password}
              onChange={handleChange("password")}
            />
            {touched.password && errors.password && (
              <p className={styles.errorText}>{errors.password}</p>
            )}
            <p className={styles.errorText}>
              {errors.usernotfound}
              {errors.notauthorized}
            </p>
            <p
              style={{
                marginTop: 20,
                marginBottom: 20,
                marginLeft: 5,
                fontSize: 14,
              }}
              className={styles.footerText}
              onClick={() => setAuthState("forgotPassword")}
            >
              {"Forgot Password?"}
            </p>
            <OutlinedButton
              className={styles.button}
              onClick={handleSubmit}
              type="submit"
            >
              <p>{"Submit"}</p>
            </OutlinedButton>
            <a style={{ marginLeft: 5 }}>{"Don't have an account? "}</a>
            <a
              className={styles.footerText}
              onClick={() => setAuthState("signUp")}
            >
              {"Sign Up"}
            </a>
          </div>
        )}
      </Formik>
    </div>
  );
}

function SignUpForm(props) {
  const { signUp, setAuthState } = React.useContext(AuthContext);

  return (
    <div>
      <h3 style={{ marginTop: 0, marginBottom: 20 }}>Sign Up</h3>
      <Formik
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        validateOnMount={true}
        validationSchema={SignUpFormValidation}
        onSubmit={(values, actions) => {
          signUp(values.email, values.password, actions);
        }}
      >
        {({ handleChange, values, handleSubmit, errors, touched }) => (
          <div>
            <StyledInput
              className={styles.input}
              placeholder="Email"
              size="small"
              type="email"
              value={values.email}
              onChange={handleChange("email")}
            />
            {touched.email && errors.email && (
              <p className={styles.errorText}>{errors.email}</p>
            )}
            <StyledInput
              className={styles.input}
              placeholder="Password"
              size="small"
              type="password"
              value={values.password}
              onChange={handleChange("password")}
            />
            {touched.password && errors.password && (
              <p className={styles.errorText}>{errors.password}</p>
            )}
            <StyledInput
              className={styles.input}
              placeholder="Confirm Password"
              size="small"
              type="password"
              value={values.confirmPassword}
              onChange={handleChange("confirmPassword")}
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <p className={styles.errorText}>{errors.confirmPassword}</p>
            )}
            <p className={styles.errorText}>{errors.useralreadyexists}</p>
            <OutlinedButton
              className={styles.button}
              onClick={handleSubmit}
              type="submit"
            >
              <p>{"Submit"}</p>
            </OutlinedButton>
            <a style={{ marginLeft: 5 }}>{"Already have an account? "}</a>
            <a
              className={styles.footerText}
              onClick={() => setAuthState("login")}
            >
              {"Log In"}
            </a>
          </div>
        )}
      </Formik>
    </div>
  );
}

function ConfirmSignUpForm(props) {
  const { confirmSignUp, resendSignUp, username, resetTime } =
    React.useContext(AuthContext);

  return (
    <div>
      <h3 style={{ marginTop: 0, marginBottom: 20 }}>{"Confirm Sign Up"}</h3>
      <Formik
        initialValues={{ username: username, code: "" }}
        validateOnMount={true}
        validationSchema={ConfirmSignUpFormValidation}
        onSubmit={(values, actions) => {
          confirmSignUp(username, values.code, actions);
        }}
      >
        {({ handleChange, values, handleSubmit, errors, touched }) => (
          <div>
            <StyledInput
              className={styles.input}
              placeholder="Verification Code"
              size="small"
              type="normal"
              value={values.code}
              onChange={handleChange("code")}
            />
            {touched.code && errors.code && (
              <p className={styles.errorText}>{errors.code}</p>
            )}
            <p className={styles.errorText}>
              {errors.codeexpired}
              {errors.verificationlimit}
            </p>
            {resetTime === null && (
              <p className={styles.errorText}>
                {"You've exceeded the resend limit, please try again later"}
              </p>
            )}
            <OutlinedButton
              className={styles.button}
              onClick={handleSubmit}
              type="submit"
            >
              <p>{"Verify Code"}</p>
            </OutlinedButton>
            <VerificationCode onClick={() => resendSignUp(username)} />
          </div>
        )}
      </Formik>
    </div>
  );
}

function ForgotPasswordForm(props) {
  const { forgotPassword, setAuthState } = React.useContext(AuthContext);

  return (
    <div>
      <h3 style={{ marginTop: 0, marginBottom: 20 }}>{"Reset Password"}</h3>
      <Formik
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        validateOnMount={true}
        validationSchema={ForgotPasswordFormValidation}
        onSubmit={(values, actions) => {
          forgotPassword(values.email, actions);
        }}
      >
        {({ handleChange, values, handleSubmit, errors, touched }) => (
          <div>
            <StyledInput
              className={styles.input}
              placeholder="Email"
              size="small"
              type="email"
              value={values.email}
              onChange={handleChange("email")}
            />
            {touched.email && errors.email && (
              <p className={styles.errorText}>{errors.email}</p>
            )}
            <p className={styles.errorText}>
              {errors.usernotfound}
              {errors.resetlimit}
            </p>
            <OutlinedButton
              className={styles.button}
              onClick={handleSubmit}
              type="submit"
            >
              <p>{"Submit"}</p>
            </OutlinedButton>
            <a style={{ marginLeft: 5 }}>{"Remember your password? "}</a>
            <a
              className={styles.footerText}
              onClick={() => setAuthState("login")}
            >
              {"Log In"}
            </a>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default function AuthModal({ props, onBackdropClick }) {
  const { authState } = React.useContext(AuthContext);

  const handleModalState = (state) => {
    setModalState(state);
  };

  const handleSetUsername = (username) => {
    setUsername(username);
  };

  return (
    <Modal
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      open={props}
      onBackdropClick={onBackdropClick}
    >
      <div className={styles.modalContainer}>
        {authState === "login" && <LoginForm />}
        {authState === "signUp" && <SignUpForm />}
        {authState === "confirmSignUp" && <ConfirmSignUpForm />}
        {authState === "forgotPassword" && <ForgotPasswordForm />}
      </div>
    </Modal>
  );
}
