import Link from "next/link";

import { styled } from "@mui/system";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/base/ButtonUnstyled";

const StyledButton = styled("button")`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding-left: 17.5px;
  padding-right: 17.5px;
  height: 40px;
  text-transform: uppercase;
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

  &:disabled {
    color: white;
    background-color: grey;
    border: 1px solid grey;
    cursor: not-allowed;
  }
`;

export default function HomePage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <h1>View Listings</h1>
      <Link href={{ pathname: "/search" }}>
        <StyledButton>Search Home</StyledButton>
      </Link>
    </div>
  );
}
