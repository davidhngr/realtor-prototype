import * as React from "react";
import styles from "./MediaModal.module.css";
import Image from "next/image";
import { Typography, Box, Modal, Backdrop, Grid } from "@mui/material";

import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

import ContactTab from "../ContactTab/ContactTab";

const Tab = styled(TabUnstyled)`
  display: flex;
  justify-content: center;
  padding: 12px 16px;
  margin: 6px 6px;
  font-size: 16px;
  font-weight: bold;
  color: black;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 8px;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: rgb(232, 233, 234);
  }

  &:focus {
    color: #fff;
    background-color: rgb(236, 141, 47);
    border: 1px solid rgb(236, 141, 47);
    border-radius: 8px;
  }

  &.${tabUnstyledClasses.selected} {
    color: rgb(236, 141, 47);
    background-color: transparent;
    border: 1px solid rgb(236, 141, 47);
    box-shadow: rgb(0 0 0 / 10%) 2px 8px 8px -4px;
  }
`;

const Map = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 11.573552798770843, lng: 104.91809349703544 }}
    >
      <Marker position={{ lat: 11.573552798770843, lng: 104.91809349703544 }} />
    </GoogleMap>
  ))
);

export default function MediaModal({ item, props, onBackdropClick }) {
  const [tab, setTab] = React.useState(0);

  const TabPanel = ({ value, index, children }) => (
    <Box hidden={value !== index}>
      {value === index && <Box>{children}</Box>}
    </Box>
  );

  return (
    <Modal
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      open={props}
      onBackdropClick={onBackdropClick}
    >
      <Box className={styles.modalContainer}>
        <TabsUnstyled
          className={styles.tabContainer}
          TabIndicatorProps={{
            style: {
              display: "none",
            },
          }}
          value={tab}
          onChange={(event, value) => setTab(value)}
        >
          <Tab value={0} disableRipple>
            Gallery
          </Tab>
          <Tab value={1} disableRipple>
            Map
          </Tab>
          <Tab value={2} disableRipple>
            Contact
          </Tab>
        </TabsUnstyled>
        <TabPanel value={tab} index={0}>
          <Typography
            sx={{
              paddingLeft: 1,
              paddingTop: 2,
              paddingBottom: 2,
              fontSize: 18,
              fontWeight: "500",
            }}
          >
            Listing Photos ({item.photo.length})
          </Typography>
          <Grid
            className={styles.galleryGrid}
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 1, md: 1 }}
          >
            {item.photo.map((items, index) => (
              <Grid item xs={6} key={index}>
                <Image height="100vh" width="100vw" layout="responsive" src={items} />
              </Grid>
            ))}
          </Grid>
        </TabPanel>
        <TabPanel value={tab} index={1}>
          <Box sx={{ height: "65vh", width: "100%" }}>
            <Map
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp"
              containerElement={<div className={styles.mapContainerElement} />}
              loadingElement={<div className={styles.mapTab} />}
              mapElement={<div className={styles.mapTab} />}
            />
          </Box>
        </TabPanel>
        <TabPanel value={tab} index={2}>
          <Typography
            sx={{
              paddingLeft: 1,
              paddingTop: 2,
              paddingBottom: 2,
              fontSize: 18,
              fontWeight: "500",
            }}
          >
            Contact an Agent
          </Typography>
          <ContactTab />
        </TabPanel>
      </Box>
    </Modal>
  );
}
