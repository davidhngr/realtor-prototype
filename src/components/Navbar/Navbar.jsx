import * as React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { AppBar, Toolbar, Button, Input, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";

import { AuthContext } from "../../stores/AuthContext";
import AuthModal from "../AuthModal/AuthModal";
import OutlinedButton from "../OutlinedButton/OutlinedButton";

const Navbar = ({ children }) => {
  const [modal, setModal] = React.useState(false);
  const context = React.useContext(AuthContext);

  return (
    <div>
      <div style={{ marginBottom: 40 }}>
        <AppBar className={styles.nav}>
          <Toolbar>
            <Link href="./../">
              <h3 style={{ color: "black", cursor: "pointer" }}>
                Realtor Prototype
              </h3>
            </Link>
            <div className={styles.inputContainer}>
              <Input
                className={styles.input}
                disableUnderline
                placeholder="Search for City, or Address..."
                endAdornment={
                  <InputAdornment position="end">
                    <Button
                      className={styles.submitBtn}
                      aria-label="submit search"
                    >
                      <Search sx={{ color: "white" }} />
                    </Button>
                  </InputAdornment>
                }
              />
            </div>
            <OutlinedButton
              onClick={() => {
                context.auth ? context.signOut() : setModal(true);
              }}
            >
              <p>{context.auth ? "Logout" : "Login"}</p>
            </OutlinedButton>
            <AuthModal props={modal} onBackdropClick={() => setModal(false)} />
            <p style={{ color: "black", paddingLeft: 20 }}>
              {context.auth ? context.currentUser : "No User"}
            </p>
          </Toolbar>
        </AppBar>
      </div>
      {children}
    </div>
  );
};

export default Navbar;
