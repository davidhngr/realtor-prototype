import styles from './HeroImage.module.css'
import { CardMedia, Box } from '@mui/material';

export default function HeroImage({ item, onClick }) {
    return (
        <Box className={styles.card} onClick={onClick}>
            <Box sx={{ width: '75%' }}>
                <CardMedia
                    component='img'
                    height='350'
                    image={item.photo[0]} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '25%' }}>
                <CardMedia
                    sx={{ borderRadius: 2, paddingLeft: 1, paddingBottom: 0.5 }}
                    component='img'
                    height='175'
                    image={item.photo[1]} />
                <CardMedia
                    sx={{ borderRadius: 2, paddingLeft: 1, paddingTop: 0.5 }}
                    component='img'
                    height='175'
                    image={item.photo[2]} />
            </Box>
        </Box>
    )
}