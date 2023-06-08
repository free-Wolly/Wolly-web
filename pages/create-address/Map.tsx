import {
  Autocomplete,
  GoogleMap,
  useJsApiLoader,
} from "@react-google-maps/api";
import React, { useCallback, useState } from "react";
import Pin from "../../public/assets/images/pin.svg";
import Image from "next/image";
import {
  API_KEY,
  center,
  containerStyle,
  libraries,
  mapOptions,
} from "./constants";

const Map = ({ setFormData, formData, setErrorMessage }: any) => {
  const [coords, setCoords] = useState(center);

  const [map, setMap] = useState<any>(null);
  const [autocomplete, setAutocomplete] = useState<any>(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
    libraries,
    language: "ka",
  });

  const onLoad = useCallback(
    function callback(map: any) {
      const bounds = new window.google.maps.LatLngBounds(coords);
      map.fitBounds(bounds);

      setMap(map);
    },
    [coords]
  );

  const onUnmount = useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  const onLoadSearch = (autocmplt: any) => {
    setAutocomplete(autocmplt);
  };

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const lat = autocomplete?.getPlace().geometry.location.lat();
      const lng = autocomplete?.getPlace().geometry.location.lng();
      setCoords({ lat, lng });
    } else {
      console.log("Autocomplete is not loaded yet!");
    }
  };

  const handleClick = async () => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ location: coords }, (results: any, status) => {
      if (status === "OK" && results[0]) {
        setFormData({
          ...formData,
          street: results[0].formatted_address,
          latitude: coords.lat,
          longitude: coords.lng,
        });
        setErrorMessage("");
      } else {
        console.log(
          "Geocode was not successful for the following reason: " + status
        );
      }
    });
  };

  return isLoaded ? (
    <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={coords}
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={mapOptions}
        onDragEnd={() => {
          setCoords({ lat: map?.center.lat(), lng: map?.center.lng() });
        }}
      >
        <Autocomplete
          onLoad={onLoadSearch}
          onPlaceChanged={onPlaceChanged}
          restrictions={{ country: ["ge"] }}
        >
          <input
            type="text"
            placeholder="ჩაწერეთ თქვენი მისამართი"
            style={{
              boxSizing: `border-box`,
              border: `1px solid transparent`,
              width: `240px`,
              height: `32px`,
              padding: `0 12px`,
              borderRadius: `3px`,
              boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
              fontSize: `14px`,
              outline: `none`,
              textOverflow: `ellipses`,
              position: "absolute",
              left: "50%",
              marginLeft: "-120px",
            }}
          />
        </Autocomplete>
        <div className="absolute left-[calc(50%-25px)] top-[calc(50%-50px)]">
          <Image src={Pin} width={50} height={50} alt="pin" />
        </div>
        <button
          className="absolute bottom-[1rem] left-[calc(50%-65px)] rounded-2xl p-[1rem] bg-gradient-to-r from-wollyBlue to-wollyLightBlue"
          onClick={handleClick}
        >
          დადასტურება
        </button>
      </GoogleMap>
    </>
  ) : (
    <div>Loading...</div>
  );
};

export default Map;
