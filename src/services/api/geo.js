export const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    resolve({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    });
                },
                (error) => {
                    reject(error.message);
                }
            );
        } else {
            reject("Geolocation is not supported");
        }
    });
};

export const watchUserLocation = (onSuccess, onError, options = {}) => {
    if ("geolocation" in navigator) {
        const watchId = navigator.geolocation.watchPosition(
            (position) => {
                onSuccess({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
            },
            (error) => {
                onError(error.message);
            },
            options
        );

        return watchId;
    } else {
        onError("Geolocation is not supported");
    }
};

export const clearLocationWatch = (watchId) => {
    navigator.geolocation.clearWatch(watchId);
}