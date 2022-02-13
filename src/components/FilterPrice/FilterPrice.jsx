import * as React from "react";
import styles from "./FilterPrice.module.css";
import { Typography, Select, MenuItem, Box, Popover } from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import OutlinedButton from "../OutlinedButton/OutlinedButton";

export default function FilterPrice(props) {
  const [open, setOpen] = React.useState(null);
  let label = "Any Price";
  let minPrice;
  let maxPrice;

  switch (props.minPrice) {
    case 10000:
      minPrice = `$${props.minPrice.toString().substring(0, 2)}k`;
      break;
    case 100000:
      minPrice = `$${props.minPrice.toString().substring(0, 3)}k`;
      break;
    case 1000000:
      minPrice = `$${props.minPrice.toString().substring(0, 1)}m`;
      break;
    case 2000000:
      minPrice = `$${props.minPrice.toString().substring(0, 1)}m`;
      break;
    case 10000000:
      minPrice = `$${props.minPrice.toString().substring(0, 2)}m`;
      break;
  }

  switch (props.maxPrice) {
    case 10000:
      maxPrice = `$${props.maxPrice.toString().substring(0, 2)}k`;
      break;
    case 100000:
      maxPrice = `$${props.maxPrice.toString().substring(0, 3)}k`;
      break;
    case 1000000:
      maxPrice = `$${props.maxPrice.toString().substring(0, 1)}m`;
      break;
    case 2000000:
      maxPrice = `$${props.maxPrice.toString().substring(0, 1)}m`;
      break;
    case 10000000:
      maxPrice = `$${props.maxPrice.toString().substring(0, 2)}m`;
      break;
  }

  if (props.minPrice === 0 && props.maxPrice === 0) {
    label = "Any Price";
  }

  if (props.minPrice !== 0 && props.maxPrice === 0) {
    label = `${minPrice}+`;
  }

  if (props.maxPrice !== 0 && props.minPrice === 0) {
    label = `$0 - ${maxPrice}`;
  }

  if (props.minPrice !== 0 && props.maxPrice !== 0) {
    label = `${minPrice} - ${maxPrice}`;
  }

  return (
    <Box>
      <OutlinedButton
        className={open ? styles.popoverButtonOpen : null}
        sx={{ marginTop: 4 }}
        props={open}
        onClick={(e) => setOpen(e.currentTarget)}
      >
        <h4>{label}</h4>
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
          <p style={{ paddingBottom: 1 }}>Price Range</p>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Select
              className={styles.select}
              value={props.minPrice}
              onChange={props.handleMin}
            >
              <MenuItem value={0}>No Min</MenuItem>
              <MenuItem value={10000}>10k</MenuItem>
              <MenuItem value={100000}>100k</MenuItem>
              <MenuItem value={1000000}>1m</MenuItem>
              <MenuItem value={2000000}>2m</MenuItem>
              <MenuItem value={10000000}>10m</MenuItem>
            </Select>
            <p style={{ paddingTop: 2, paddingLeft: 1, paddingRight: 1 }}>—</p>
            <Select
              className={styles.select}
              value={props.maxPrice}
              onChange={props.handleMax}
            >
              <MenuItem value={0}>No Max</MenuItem>
              <MenuItem value={10000}>10k</MenuItem>
              <MenuItem value={100000}>100k</MenuItem>
              <MenuItem value={1000000}>1m</MenuItem>
              <MenuItem value={2000000}>2m</MenuItem>
              <MenuItem value={10000000}>10m</MenuItem>
            </Select>
          </Box>
        </Box>
      </Popover>
    </Box>
  );
}
