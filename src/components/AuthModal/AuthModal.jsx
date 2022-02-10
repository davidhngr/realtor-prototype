import * as React from "react";
import styles from "./AuthModal.module.css";
import { Modal, Backdrop } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";

import OutlinedButton from "../OutlinedButton/OutlinedButton";

export default function AuthModal({ item, props, onBackdropClick }) {
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
        <OutlinedButton className={styles.facebookButton}>
          <FacebookIcon sx={{ marginRight: 1 }} />
          <h4>Sign in with Facebook</h4>
        </OutlinedButton>
        <OutlinedButton sx={{ marginTop: 1 }} className={styles.githubButton}>
          <GitHubIcon sx={{ marginRight: 1 }} />
          <h4>Sign in with GitHub</h4>
        </OutlinedButton>
      </div>
    </Modal>
  );
}
