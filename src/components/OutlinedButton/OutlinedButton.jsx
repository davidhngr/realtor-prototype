import * as React from "react";

import { styled } from '@mui/system';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';

const StyledOutline = styled('button')`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 17.5px;
  padding-right: 17.5px;
  height: 40px;
  color: rgb(255, 153, 51);
  background-color: white;
  border: 1px solid rgb(255, 204, 153);
  border-radius: 8px;
  outline: none;
  transition: all 150ms ease;
  cursor: pointer;
  z-index: 5;

  &:hover {
    color: white;  
    background-color: rgb(236, 141, 47);
    border: 1px solid rgb(236, 141, 47);
  }

  &:focus {
    color: rgb(255, 153, 51);
    background-color: white;
    border: 1px solid rgb(255, 153, 51);
  }

  &.${buttonUnstyledClasses.active} {
    color: white;
    background-color: rgb(255, 153, 51);
    border: 1px solid rgb(255, 153, 51);
  }
`

export default function OutlinedButton({ children, props, ...rest }) {
  const [open, setOpen] = React.useState(props);

  React.useEffect(() => {
    setOpen(props)
  }, [props])

  return (
    <StyledOutline
      disableRipple
      {...rest}>
      {children}
    </StyledOutline>
  )
}
