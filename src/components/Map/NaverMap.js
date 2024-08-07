import React, { useEffect } from 'react';

const NaverMap = () => {
    useEffect(() => {
        const { naver } = window;

        if(!naver) return;

        const mapOptions = {
            center: new naver.maps.LatLng(37.5665, 126.9780),
            zoom: 15,
        };

        const map = new naver.maps.Map('map', mapOptions);

        new naver.maps.Marker({
            position: new naver.maps.LatLng(37.5665, 126.9780),
            map: map,
        });
    }, []);

    return (
        <div id="map" style={{ width: '100%', height: '650px' }}></div>
    );
}

export default NaverMap;