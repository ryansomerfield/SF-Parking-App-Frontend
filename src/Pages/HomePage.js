import React from "react";
import NavigationHeader from "../Components/NavigationHeader";
import NavigationFooter from "../Components/NavigationFooter";
import CarCard from "../Components/CarCard";
import Map from "../Components/Map";
import { useSelector } from "react-redux";

const HomePage = () => {
  const user = useSelector((state) => state.user);
  return (
    <>
      <NavigationHeader />
      <div className="content-container">
        <Map />
        <div className="card-container">
          <CarCard name="Volkswagen Jetta" parked={true} />
          <CarCard name="Honda CRV" parked={false} />
          <CarCard name="Kia Soul" parked={true} />
        </div>
      </div>
      <NavigationFooter />
    </>
  );
};

export default HomePage;
