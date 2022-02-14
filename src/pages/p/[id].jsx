import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/HouseDetail.module.css";
import { Typography, Button, Box, TextField } from "@mui/material";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

import Auth from "@aws-amplify/auth";

import Summary from "../../components/Summary/Summary";
import HouseDetails from "../../components/HouseDetails/HouseDetails";
import MessageInput from "../../components/MessageInput/MessageInput";

import HotelIcon from "@mui/icons-material/Hotel";
import BathtubIcon from "@mui/icons-material/Bathtub";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import PoolIcon from "@mui/icons-material/Pool";
import ThermostatIcon from "@mui/icons-material/Thermostat";

export default function HousePage() {
  const router = useRouter();
  const item = router.query;
  const keyDetails = JSON.parse(item.keyDetails);

  console.log(keyDetails);

  const Map = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: 11.573552798770843, lng: 104.91809349703544 }}
      >
        <Marker
          position={{ lat: 11.573552798770843, lng: 104.91809349703544 }}
        />
      </GoogleMap>
    ))
  );

  const Facts = () => (
    <Box sx={{ width: "65%" }}>
      <HouseDetails
        item={item}
        line1={{ fontSize: 28, fontWeight: "500" }}
        line2={{ fontSize: 15 }}
        line3={{ fontSize: 28, fontWeight: "500" }}
        line4={{ fontSize: 15 }}
      />
      <Box className={styles.factsContainer}>
        <HotelIcon />
        <Typography sx={{ fontSize: 15, marginLeft: 1 }}>
          {item.beds} Beds
        </Typography>
        <BathtubIcon sx={{ marginLeft: 1 }} />
        <Typography sx={{ fontSize: 15, marginLeft: 1 }}>
          {item.baths} Baths
        </Typography>
        <SquareFootIcon sx={{ marginLeft: 1 }} />
        <Typography sx={{ fontSize: 15, marginLeft: 1 }}>
          {item.area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} sqft
        </Typography>
      </Box>
      <Typography sx={{ fontSize: 18, fontWeight: "500", paddingTop: 6 }}>
        Map Direction
      </Typography>
      <Box sx={{ height: 200, width: "100%", marginTop: 3.5 }}>
        <Map
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp"
          containerElement={<div className={styles.mapContainerElement} />}
          loadingElement={<div className={styles.mapElement} />}
          mapElement={<div className={styles.mapElement} />}
        />
      </Box>
      <Box sx={{ paddingTop: 4 }}>
        <Typography sx={{ fontSize: 18, fontWeight: "500" }}>
          Description
        </Typography>
        <Typography sx={{ paddingTop: 2 }}>{item.description}</Typography>
      </Box>
    </Box>
  );

  const ContactForm = () => (
    <Box className={styles.contactFormContainer}>
      <Box className={styles.contactForm}>
        <Typography sx={{ alignSelf: "center" }}>Contact Agent</Typography>
        <img
          className={styles.avatar}
          src="https://img.freepik.com/free-vector/realtor-concept-illustration_114360-3040.jpg?w=900"
        />
        <MessageInput
          minRows={2}
          maxRows={2}
          hiddenLabel={false}
          label="Message"
        />
        <Button className={styles.button} variant="contained" disableRipple>
          Send Message
        </Button>
        <Typography style={{ fontSize: 10, color: "#6b7780" }}>
          By pressing Send Message, you agree that real estate professionals may
          contact you via phone/text about your inquiry, which may involve the
          use of automated means. You are not required to consent as a condition
          of purchasing any property, goods or services. Message/data rates may
          apply. You also agree to our Terms of Use does not endorse any real
          estate professionals
        </Typography>
      </Box>
    </Box>
  );

  const Features = () => {
    const FeatureRow = ({ key1, value1, icon1, key2, value2, icon2 }) => {
      return (
        <Box className={styles.feature}>
          <Box className={styles.featureRow}>
            <Box sx={{ display: "flex" }}>
              {icon1}
              <Typography sx={{ marginLeft: 1 }}>{key1}</Typography>
            </Box>
            <Box>
              <Typography sx={{ marginLeft: 1, fontWeight: "500" }}>
                {value1}
              </Typography>
            </Box>
          </Box>
          <Box className={styles.featureRow} style={{ marginLeft: 200 }}>
            <Box sx={{ display: "flex" }}>
              {icon2}
              <Typography sx={{ marginLeft: 1 }}>{key2}</Typography>
            </Box>
            <Box>
              <Typography sx={{ marginLeft: 1, fontWeight: "500" }}>
                {value2}
              </Typography>
            </Box>
          </Box>
        </Box>
      );
    };

    return (
      <Box className={styles.featureContainer}>
        <Typography sx={{ fontSize: 20, fontWeight: "500" }}>
          Feature Highlights
        </Typography>
        <Box>
          <FeatureRow
            key1="Garage"
            value1={item.garage}
            icon1={<LocalParkingIcon sx={{ color: "orange" }} />}
            key2="Price/Sqft"
            icon2={<SquareFootIcon sx={{ color: "orange" }} />}
            value2={`$${Math.floor(item.price / item.area)}`}
          />
          <FeatureRow
            key1="Pool"
            value1={item.pool}
            icon1={<PoolIcon sx={{ color: "orange" }} />}
            key2="Cooling"
            icon2={<ThermostatIcon sx={{ color: "orange" }} />}
            value2={item.cooling}
          />
        </Box>
      </Box>
    );
  };

  return (
    <Box>
      <Summary item={item} />
      <Box className={styles.container}>
        <Box className={styles.detailContainer}>
          <Facts />
          <ContactForm />
        </Box>
        <Features />
      </Box>
    </Box>
  );
}
