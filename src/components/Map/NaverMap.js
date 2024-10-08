/* global naver */
import React, { useEffect, useState } from 'react';
import { fetchMapData } from 'services/api/map';
import { watchUserLocation, clearLocationWatch } from 'services/api/geo';

const NaverMap = () => {
    const [location, setLocation] = useState({ lat: null, lng: null });
    const [error, setError] = useState(null);
    const [map, setMap] = useState(null);
    const [markers, setMarkers] = useState([]);
    const [myLocationMarker, setMyLocationMarker] = useState(null);

    useEffect(() => {
        const watchId = watchUserLocation(
                (newLocation) => setLocation(newLocation),
                (err) => setError(err),
                {
                    enableHighAccuracy: true,
                    timeout: 5000,
                    maximumAge: 0,
                }
            );

        return () => {
            clearLocationWatch(watchId);
        }
    }, []);

    useEffect(() => {
        if (!map && location.lat && location.lng) {
            const mapOptions = {
                center: new naver.maps.LatLng(location.lat, location.lng),
                zoom: 15,
            };
            const mapInstance = new naver.maps.Map('map', mapOptions);
            setMap(mapInstance);

            const markerContent = `
                <div class="custom-marker" style="
                    width: 50px;
                    height: 50px;
                    background-image: url('https://lh3.googleusercontent.com/a/AEdFTp6uzKCDpf4kRS5hZGG2jKkxKU1TSdG0JjXPnj2e=s96-c');
                    background-size: cover;
                    border-radius: 50%;
                    border: 2px solid white;
                    box-shadow: 0 0 5px rgba(0,0,0,0.5);
                "></div>
            `;

            const myMarker = new naver.maps.Marker({
                position: new naver.maps.LatLng(location.lat, location.lng),
                map: mapInstance,
                title: 'My Location',
                icon: {
                    content: markerContent,
                    anchor: new naver.maps.Point(25, 25),
                },
            });
            setMyLocationMarker(myMarker);
        } else if (map) {
            const newCenter = new naver.maps.LatLng(location.lat, location.lng);
            // map.setCenter(newCenter);
            myLocationMarker.setPosition(newCenter);
        }
    }, [location]);

    useEffect(() => {
        const loadMapData = async () => {
            try {
                const data = await fetchMapData();

                markers.forEach(marker => marker.setMap(null));

                const newMarkers = data.map(item => {
                    const marker = new naver.maps.Marker({
                        position: new naver.maps.LatLng(item.lat, item.lng),
                        map: map,
                        title: item.title,
                    });

                    naver.maps.Event.addListener(marker, 'click', (event) => {
                        alert(`Marker: ${item.title}`);
                    });

                    return marker;
                });

                setMarkers(newMarkers);
            } catch (error) {
                console.error(error);
            }
        };

        if(map) {
            loadMapData();
        }

    }, [map]);

    return (
        <div id="map" style={{ width: '100%', height: '650px' }}></div>
    );
}

export default NaverMap;