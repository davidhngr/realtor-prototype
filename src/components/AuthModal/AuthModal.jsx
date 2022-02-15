import * as React from "react";
import styles from "./AuthModal.module.css";
import { Modal, Backdrop } from "@mui/material";

import { AuthContext } from "../../stores/AuthContext";

import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";

import OutlinedButton from "../OutlinedButton/OutlinedButton";
import StyledInput from "../StyledInput/StyledInput";

import { Formik } from "formik";
import * as Yup from "yup";

const FormValidation = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email Address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be 8 characters or longer")
    .required("Password is required"),
});

export default function AuthModal({ item, props, onBackdropClick }) {
  const { signIn, signOut } = React.useContext(AuthContext);
  const context = React.useContext(AuthContext);

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
        <h3 style={{ marginTop: 0 }}>Log In</h3>
        <Formik
          initialValues={{ email: "", password: "" }}
          validateOnMount={true}
          validationSchema={FormValidation}
          onSubmit={(values, actions) => {
            context.auth ? signOut() : signIn(values.email, values.password, actions);
          }}
        >
          {({
            handleChange,
            values,
            handleSubmit,
            handleBlur,
            errors,
            touched,
          }) => (
            <div>
              <p style={{ marginTop: 20, fontSize: 14 }}>Email</p>
              <StyledInput
                className={styles.input}
                placeholder="Enter email address"
                size="small"
                value={values.email}
                onChange={handleChange("email")}
              />
              <p style={{ marginTop: 20, fontSize: 14 }}>Password</p>
              <StyledInput
                className={styles.input}
                placeholder="Enter your password"
                size="small"
                value={values.password}
                onChange={handleChange("password")}
              />
              <OutlinedButton
                className={styles.button}
                onClick={handleSubmit}
                type="submit"
              >
                <p>Submit</p>
              </OutlinedButton>
            </div>
          )}
        </Formik>
      </div>
    </Modal>
  );
}
