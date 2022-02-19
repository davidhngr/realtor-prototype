import * as React from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

import { Grid, Card, CardMedia, CardContent, Box } from "@mui/material";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import Split from "react-split";

import { withSSRContext } from "aws-amplify";
import { searchHouses } from "../../graphql/queries";

import Filter from "../../components/Filter/Filter";

export async function getServerSideProps({ req, query }) {
  const SSR = withSSRContext(req);
  const beds = query.beds === undefined ? 0 : query.beds;
  const baths = query.baths === undefined ? 0 : query.baths;
  const minPrice = query.minPrice === undefined ? 0 : query.minPrice;
  const maxPrice = query.maxPrice === undefined ? 1000000000 : query.maxPrice;

  const response = await SSR.API.graphql({
    query: searchHouses,
    variables: {
      filter: {
        beds: { gte: beds },
        baths: { gte: baths },
        and: [{ price: { gt: minPrice } }, { price: { lt: maxPrice } }],
      },
      sort: {
        field: "createdAt",
        direction: "desc",
      },
    },
    authMode: "AWS_IAM",
  });

  return {
    props: {
      houses: response.data.searchHouses.items,
    },
  };
}

export default function Search({ houses }) {
  const Map = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: 11.573552798770843, lng: 104.91809349703544 }}
      >
        {props.isMarkerShown && (
          <Marker position={{ lat: -34.397, lng: 150.644 }} />
        )}
      </GoogleMap>
    ))
  );

  const RenderHouses = () => {
    const render = houses.map((item, index) => {
      const numberFormatter = (number) => {
        let newValue = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return newValue;
      };

      let facts = `${item.beds} Beds ${item.baths} Baths ${numberFormatter(
        item.area
      )} Sq. Ft.`;
      let details = `${item.address}, ${item.city}, ${item.state}`;

      return (
        <Link
          href={{ pathname: `p/${item.id}`, query: item }}
          passHref
          key={item.id}
        >
          <Grid
            className={styles.grid}
            item
            key={item.id}
            sm={12}
            md={6}
            lg={6}
            xl={4}
          >
            <Card className={styles.cardContainer}>
              <CardMedia component="img" height="150" image={item.photo[0]} />
              <CardContent>
                <h3 style={{ paddingBottom: 8 }}>
                  ${numberFormatter(item.price)}
                </h3>
                <p>{facts}</p>
                <p style={{ paddingTop: 4 }}>
                  {details.substring(0, 30) + "..."}
                </p>
              </CardContent>
            </Card>
          </Grid>
        </Link>
      );
    });
    return render;
  };

  return (
    <React.Fragment>
      <Filter />
      <Split className={styles.container} sizes={["180vh", Infinity]}>
        <div className={styles.houseContainer}>
          <Box>
            <h4 style={{ paddingLeft: 10 }}>Homes For Sale</h4>
            <Box className={styles.sortContainer}>
              <p>{houses.length} homes available</p>
              <p>Sort: Recommended</p>
            </Box>
          </Box>
          <Box className={styles.gridContainer}>
            <Grid container spacing={2}>
              <RenderHouses />
            </Grid>
          </Box>
        </div>
        <div className={styles.mapContainer}>
          <Map
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp"
            containerElement={<div className={styles.mapContainerElement} />}
            loadingElement={<div className={styles.mapElement} />}
            mapElement={<div className={styles.mapElement} />}
          />
        </div>
      </Split>
    </React.Fragment>
  );
}
