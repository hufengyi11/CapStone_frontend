import React, { useEffect } from 'react'
import { useState } from 'react';
const Geolocation = () => {
    const [location, setLocation] = useState({
        loaded: false,
        coordinates: {lat: "", lng: ""}
    });

    const onSuccess = (location) => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude
            },
        });
    };

    const onError = (error) => {
        setLocation({
            loaded: true,
            error,
            });
        }

    useEffect(() => {
        if(!("geolocation" in navigator)) {
            onError({
                    code: 0,
                    message: "Geolocation not supported",
            });
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }, []);


  return location;
}

export default Geolocation;