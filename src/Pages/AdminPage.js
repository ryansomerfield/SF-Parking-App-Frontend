import React from "react";
import NavigationHeader from "../Components/NavigationHeader";
import NavigationFooter from "../Components/NavigationFooter";
import Map from "../Components/Map";
import StreetForm from "../Components/StreetForm";

const AdminPage = () => {
  return (
    <>
      <NavigationHeader />
      <div className="content-container">
        <Map />
        <div className="card-container">
          <StreetForm />
        </div>
      </div>
      <NavigationFooter />
    </>
  );
};

export default AdminPage;
