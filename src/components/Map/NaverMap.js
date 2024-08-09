/* global naver */
import React, { useEffect, useState } from 'react';
import { fetchMapData } from 'services/api/map';

const NaverMap = () => {
    const [map, setMap] = useState(null);
    const [markers, setMarkers] = useState([]);

    useEffect(() => {
        if(!naver) return;

        const mapOptions = {
            center: new naver.maps.LatLng(37.5665, 126.9780),
            zoom: 15,
        };

        const mapInstance  = new naver.maps.Map('map', mapOptions);

        setMap(mapInstance);
    }, []);

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