import * as React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Input,
  InputAdornment,
} from "@mui/material";
import { Search } from "@mui/icons-material";

import AuthModal from "../AuthModal/AuthModal";
import OutlinedButton from "../OutlinedButton/OutlinedButton";

const Navbar = ({ children }) => {
  const [modal, setModal] = React.useState(false);

  return (
    <div>
      <div style={{ marginBottom: 40 }}>
        <AppBar className={styles.nav}>
          <Toolbar>
            <Link href="./../">
              <Typography
                variant="h6"
                component="div"
                sx={{ color: "black", cursor: "pointer" }}
              >
                Realtor Prototype
              </Typography>
            </Link>
            <Box className={styles.inputContainer}>
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
            </Box>
            <OutlinedButton onClick={() => setModal(true)}>
              <Typography sx={{ fontWeight: "500" }}>Login</Typography>
            </OutlinedButton>
            <AuthModal props={modal} onBackdropClick={() => setModal(false)} />
          </Toolbar>
        </AppBar>
      </div>
      {children}
    </div>
  );
};

export default Navbar;
