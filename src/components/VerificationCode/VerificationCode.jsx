import * as React from "react";

import { styled } from "@mui/system";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/base/ButtonUnstyled";

import { AuthContext } from "../../stores/AuthContext";

const StyledButton = styled("button")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  color: black;
  background-color: transparent;
  border: none;
  outline: none;
  transition: all 150ms ease;
  cursor: pointer;

  &:hover {
    color: rgb(255, 153, 51);
    background-color: transparent;
    border: none;
  }

  &:focus {
    color: rgb(255, 153, 51);
    background-color: transparent;
    border: none;
  }

  &.${buttonUnstyledClasses.active} {
    color: rgb(255, 153, 51);
    background-color: transparent;
    border: none;
  }

  &:disabled {
    color: grey;
    background-color: transparent;
    border: none;
    cursor: not-allowed;
  }
`;

export default function VerificationCode({ ...rest }) {
  const { resetTime, setResetTime } = React.useContext(AuthContext);

  React.useEffect(() => {
    const countdown = setInterval(() => {
      setResetTime(resetTime - 1);
    }, 1000);

    if (resetTime <= 0) {
      clearInterval(countdown);
    }
    return () => clearTimeout(countdown);
  }, []);

  return (
    <StyledButton disabled={resetTime <= 0 ? false : true} {...rest}>
      {resetTime < 0 ? (
        <p
          style={{ fontSize: 14 }}
        >{`Resend verification code in ${resetTime}`}</p>
      ) : (
        <p style={{ fontSize: 14 }}>Resend Code</p>
      )}
    </StyledButton>
  );
}
