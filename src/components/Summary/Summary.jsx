import * as React from "react";
import styles from './Summary.module.css';
import { Card, Chip, Typography, Box } from '@mui/material';

import HeroImage from "../HeroImage/HeroImage";
import MediaModal from "../MediaModal/MediaModal";
import HouseDetails from "../HouseDetails/HouseDetails";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

import PhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';

export default function Summary({ item }) {
    const [visible, setVisible] = React.useState(-150);
    const [isFavorite, setIsFavorite] = React.useState(false);
    const [modal, setModal] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener('scroll', hideOnScroll);
        return () => window.removeEventListener('scroll', hideOnScroll);
    }, [])

    const hideOnScroll = () => {
        if (window.scrollY > 500) {
            setVisible(50);
        } else {
            setVisible(-150);
        }
    }

    return (
        <Box>
            <Box className={styles.summaryContainer} style={{ top: visible }} id='summary'>
                <Box sx={{ width: '50%', alignSelf: 'center' }}>
                    <HouseDetails
                        item={item}
                        line1={{ fontSize: 18, fontWeight: '500' }}
                        line2={{ fontSize: 14 }}
                        line3={{ fontSize: 18, fontWeight: '500', marginRight: 8 }}
                        line4={{ fontSize: 0 }} />
                </Box>
                <Box sx={{ width: '50%', alignSelf: 'center' }}>
                    <FavoriteButton
                        className={styles.favoriteContainer}
                        props={isFavorite}
                        onClick={() => setIsFavorite(!isFavorite)} />
                </Box>
            </Box>
            <Box className={styles.galleryContainer}>
                <Card className={styles.cardContainer}>
                    <Chip
                        className={styles.chip}
                        label='FOR SALE'
                        size='small' />
                    <FavoriteButton
                        className={styles.favoriteChip}
                        props={isFavorite}
                        onClick={() => setIsFavorite(!isFavorite)} />
                    <Box
                        className={styles.albumChip}
                        onClick={() => setModal(true)}>
                        <PhotoOutlinedIcon sx={{ fontSize: 16, color: 'white' }} />
                        <Typography sx={{ fontSize: 12, paddingLeft: 0.5, fontWeight: 'bold', color: 'white' }}>
                            {item.photo.length}
                        </Typography>
                    </Box>
                    <HeroImage
                        item={item}
                        onClick={() => setModal(true)} />
                </Card>
                <MediaModal
                    item={item}
                    props={modal}
                    onBackdropClick={() => setModal(false)} />
            </Box>
        </Box>
    )
}
