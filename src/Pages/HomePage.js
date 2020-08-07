import React, { useState } from "react";
import NavigationHeader from "../Components/NavigationHeader";
import NavigationFooter from "../Components/NavigationFooter";
import CarCard from "../Components/CarCard";
import Map from "../Components/Map";
import AddCarForm from "../Components/AddCarForm";
import { useSelector } from "react-redux";
import { setUser } from "../actions/user";
import { useDispatch } from "react-redux";

const HomePage = () => {
  let user = useSelector((state) => state.user);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const addCar = async (formData) => {
    try {
      await fetch(`${process.env.REACT_APP_BACKEND_URL}car/`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          owner: user._id,
          isParked: false,
          location: null,
          street: null,
          ...formData,
        }),
      });
      await fetch(`${process.env.REACT_APP_BACKEND_URL}user/me`, {
        method: "GET",
        credentials: "include",
      }).then(async (res) => {
        if (res.status === 200) {
          const user = await res.json();
          dispatch(setUser(user[0]));
        } else {
          const error = new Error(res.error);
          throw error;
        }
      });
      handleClose();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <NavigationHeader user={user} />
      <div className="content-container">
        <Map />
        <div className="card-container">
          <h2>Cars</h2>
          {user.cars.length > 0
            ? user.cars.map((car) => (
                <CarCard
                  key={car._id}
                  carId={car._id}
                  name={car.nickname}
                  parked={car.isParked}
                  make={car.make}
                  model={car.model}
                  year={car.year}
                  color={car.color}
                />
              ))
            : "You have no cars to display."}
          <div className="button-add-car" onClick={handleShow}>
            <i
              className="fa fa-plus button-add-car-text"
              aria-hidden="true"
            ></i>
          </div>
          <AddCarForm
            onFormSubmit={addCar}
            showModal={show}
            handleClose={handleClose}
          />
        </div>
      </div>
      <NavigationFooter />
    </>
  );
};

export default HomePage;
