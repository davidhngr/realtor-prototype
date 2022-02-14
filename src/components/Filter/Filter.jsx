import * as React from "react";
import styles from "./Filter.module.css";
import { useRouter } from "next/router";

import FilterPrice from "../FilterPrice/FilterPrice";
import FilterBed from "../FilterBed/FilterBed";
import FilterBath from "../FilterBath/FilterBath";

export default function Filter() {
  const router = useRouter();
  const [minPrice, setMinPrice] = React.useState(0);
  const [maxPrice, setMaxPrice] = React.useState(0);
  const [beds, setBeds] = React.useState(
    router.query.beds ? parseInt(router.query.beds, 10) : null
  );
  const [baths, setBaths] = React.useState(
    router.query.baths ? parseInt(router.query.baths, 10) : null
  );
  let url;

  React.useEffect(() => {
    const queryBeds = `beds=${beds}`;
    const queryBaths = `baths=${baths}`;
    const queryMinPrice = `minPrice=${minPrice}`;
    const queryMaxPrice = `maxPrice=${maxPrice}`;

    if (beds !== null && baths === null && minPrice === 0 && maxPrice === 0) {
      url = `/search?${queryBeds}`;
      router.push(url, url);
    }

    if (baths !== null && beds === null && minPrice === 0 && maxPrice === 0) {
      url = `/search?${queryBaths}`;
      router.push(url, url);
    }

    if (beds === null && baths === null && minPrice !== 0 && maxPrice === 0) {
      url = `/search?${queryMinPrice}`;
      router.push(url, url);
    }

    if (beds === null && baths === null && minPrice === 0 && maxPrice !== 0) {
      url = `/search?${queryMaxPrice}`;
      router.push(url, url);
    }

    if (beds === null && baths === null && minPrice !== 0 && maxPrice !== 0) {
      url = `/search?${queryMinPrice}&${queryMaxPrice}`;
      router.push(url, url);
    }

    if (beds !== null && baths !== null && minPrice === 0 && maxPrice === 0) {
      url = `/search?${queryBeds}&${queryBaths}`;
      router.push(url, url);
    }

    if (beds !== null && baths === null && minPrice !== 0 && maxPrice === 0) {
      url = `/search?${queryBeds}&${queryMinPrice}`;
      router.push(url, url);
    }

    if (beds !== null && baths === null && minPrice === 0 && maxPrice !== 0) {
      url = `/search?${queryBeds}&${queryMaxPrice}`;
      router.push(url, url);
    }

    if (beds === null && baths !== null && minPrice !== 0 && maxPrice === 0) {
      url = `/search?${queryBaths}&${queryMinPrice}`;
      router.push(url, url);
    }

    if (beds === null && baths !== null && minPrice === 0 && maxPrice !== 0) {
      url = `/search?${queryBaths}&${queryMaxPrice}`;
      router.push(url, url);
    }

    if (beds !== null && baths !== null && minPrice !== 0 && maxPrice === 0) {
      url = `/search?${queryBeds}&${queryBaths}&${queryMinPrice}`;
      router.push(url, url);
    }

    if (beds !== null && baths !== null && minPrice === 0 && maxPrice !== 0) {
      url = `/search?${queryBeds}&${queryBaths}&${queryMaxPrice}`;
      router.push(url, url);
    }

    if (beds !== null && baths === null && minPrice !== 0 && maxPrice !== 0) {
      url = `/search?${queryBeds}&${queryMinPrice}&${queryMaxPrice}`;
      router.push(url, url);
    }

    if (beds === null && baths !== null && minPrice !== 0 && maxPrice !== 0) {
      url = `/search?${queryBaths}&${queryMinPrice}&${queryMaxPrice}`;
      router.push(url, url);
    }

    if (beds !== null && baths !== null && minPrice !== 0 && maxPrice !== 0) {
      url = `/search?${queryBeds}&${queryBaths}&${queryMinPrice}&${queryMaxPrice}`;
      router.push(url, url);
    }
  }, [beds, baths, minPrice, maxPrice]);

  const handleMinChange = (e) => {
    if (e.target.value > maxPrice && maxPrice != 0) {
      setMaxPrice(e.target.value);
    } else if (e.target.value === 0) {
      setMinPrice(e.target.value);
    } else {
      setMinPrice(e.target.value);
    }

    if (
      beds === null &&
      baths === null &&
      e.target.value === 0 &&
      maxPrice === 0
    ) {
      router.push("/search");
    }
  };

  const handleMaxChange = (e) => {
    if (e.target.value < minPrice && e.target.value != 0) {
      setMinPrice(e.target.value);
    } else if (e.target.value === 0) {
      setMaxPrice(e.target.value);
    } else {
      setMaxPrice(e.target.value);
    }

    if (
      beds === null &&
      baths === null &&
      minPrice === 0 &&
      e.target.value === 0
    ) {
      router.push("/search");
    }
  };

  const handleBeds = (e, val) => {
    if (val !== null) {
      setBeds(val);
    }
  };

  const handleBaths = (e, val) => {
    if (val !== null) {
      setBaths(val);
    }
  };

  return (
    <div className={styles.filterContainer}>
      <FilterPrice
        minPrice={minPrice}
        maxPrice={maxPrice}
        handleMin={handleMinChange}
        handleMax={handleMaxChange}
      />
      <FilterBed beds={beds} handleBeds={handleBeds} />
      <FilterBath baths={baths} handleBaths={handleBaths} />
    </div>
  );
}
