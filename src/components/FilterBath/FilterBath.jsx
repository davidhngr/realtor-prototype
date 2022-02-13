import * as React from "react";
import styles from "./FilterBath.module.css";

import { Box, Popover, ToggleButton, ToggleButtonGroup } from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import OutlinedButton from "../OutlinedButton/OutlinedButton";

export default function FilterBath(props) {
  const [open, setOpen] = React.useState(null);

  return (
    <Box>
      <OutlinedButton
        className={open ? styles.popoverButtonOpen : null}
        sx={{ marginTop: 4, marginLeft: 1.5 }}
        props={open}
        onClick={(e) => setOpen(e.currentTarget)}
      >
        <h4>{props.baths ? `${props.baths}+ Baths` : "Any Baths"}</h4>
        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </OutlinedButton>
      <Popover
        className={styles.popover}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        onClose={() => setOpen(null)}
        anchorEl={open}
      >
        <Box sx={{ display: "flex", flexDirection: "column", padding: 1 }}>
          <p style={{ paddingBottom: 1 }}>Bathrooms</p>
          <ToggleButtonGroup
            color="standard"
            size="small"
            defaultValue={props.baths}
            value={props.baths}
            exclusive
            onChange={props.handleBaths}
          >
            <ToggleButton disableRipple value={1}>
              1+
            </ToggleButton>
            <ToggleButton disableRipple value={2}>
              2+
            </ToggleButton>
            <ToggleButton disableRipple value={3}>
              3+
            </ToggleButton>
            <ToggleButton disableRipple value={4}>
              4+
            </ToggleButton>
            <ToggleButton disableRipple value={5}>
              5+
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Popover>
    </Box>
  );
}
