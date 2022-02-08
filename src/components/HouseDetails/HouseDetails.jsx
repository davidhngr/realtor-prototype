import { Box, Typography } from '@mui/material';

export default function HouseDetails({ item, line1, line2, line3, line4 }) {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ justifyContent: 'center' }}>
                <Typography sx={line1}>
                    {item.address}
                </Typography>
                <Typography sx={line2}>
                    {item.city}, {item.state}
                </Typography>
            </Box>
            <Box sx={{ justifyContent: 'center' }}>
                <Typography sx={line3}>
                    ${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </Typography>
                <Typography sx={line4}>
                    {`Est. Mortgage $${Math.floor(item.price / 240).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}/month`}
                </Typography>
            </Box>
        </Box>
    )
}
