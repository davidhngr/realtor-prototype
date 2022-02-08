import * as React from "react";
import { Typography } from '@mui/material';

import { styled } from '@mui/system';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Favorite = styled(ButtonUnstyled)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 155px;
  top: 85px;
  width: 125px;
  height: 45px;
  color: red;
  background-color: white;
  border: 1px solid white;
  border-radius: 8px;
  outline: none;
  z-index: 5;

  &:hover {
    color: white !important;  
    background-color: rgb(236, 141, 47);
    border: 1px solid rgb(236, 141, 47);
    cursor: pointer;
  }

  &:active {
    color: white;
    border: 1px solid rgb(255, 153, 51);
    background-color: rgb(255, 153, 51);
  }
`

export default function FavoriteButton({ className, props, onClick }) {
    const [favorite, setFavorite] = React.useState(props);

    React.useEffect(() => {
        setFavorite(props)
    }, [props])

    return (
        <Favorite
            className={className}
            onClick={onClick}>
            {favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            <Typography sx={{ marginLeft: 1 }}>Favorite</Typography>
        </Favorite>
    )
}
