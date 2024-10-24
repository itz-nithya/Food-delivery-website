import React, { useState } from 'react';
import "../css/Header.css";
import "../css/OrderOnline.css"

const OrderOnline = () => {
  const [error, setError] = useState(null);
  const [location, setLocation] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          setError(null);
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };




  return (
    <>
                                  <div><img src={logo} alt="Zomato" width="150" height="60" /></div>

      <div className="location-tracker-2">

        <div className='btn btn-light' style={{ color: "#888787" }} onClick={getLocation}><i class="pe-2 fa-solid fa-location-dot location"></i>Chennai </div>
        <div class="dropdown location-drop">
          <button class="btn btn-light dropdown-toggle drop-button" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          </button>
          <ul class="dropdown-menu dropdown">
            <li><button class="dropdown-item" type="button">Action</button></li>
            <li><button class="dropdown-item" type="button">Another action</button></li>
            <li><button class="dropdown-item" type="button">Something else here</button></li>
          </ul><span style={{ fontSize: "25px" }}>|</span>
          <span className='searchbox'><i class="ps-3 pe-3 fa-solid fa-magnifying-glass" style={{ fontSize: "20px" }}></i>
            <input type="search" className='search-field' placeholder='Search for restaurant, cuisine or a dish' /></span>

        </div>

        {location && (
          <p>
            Latitude: {location.latitude}, Longitude: {location.longitude}
          </p>
        )}
        {error && <p className="error">{error}</p>}
      </div>

    </>
  );
};

export default OrderOnline;
