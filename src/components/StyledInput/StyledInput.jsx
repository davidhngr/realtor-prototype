import * as React from "react";
import { TextField } from "@mui/material";

export default function StyledInput({ ...rest }) {
  return (
    <TextField
      InputLabelProps={{ shrink: true, focused: true }}
      InputProps={{
        disableUnderline: true,
        hiddenLabel: true,
        style: {
          alignItems: "flex-start",
          backgroundColor: "white",
        },
      }}
      sx={{
        "& .MuiFilledInput-root": {
          border: 1,
          borderColor: "rgb(134, 144, 153)",
          borderRadius: 2,
          "&.Mui-focused": {
            boxShadow:
              "rgb(255 255 255) 0px 0px 0px 1px, rgb(255 153 51) 0px 0px 2px 3px, rgb(236, 141, 47) 0px 0px 2px 4px",
          },
        },
      }}
      variant="filled"
      {...rest}
    />
  );
}
