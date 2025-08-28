maptilersdk.config.apiKey = mapToken;
    const map = new maptilersdk.Map({
      container: 'map', // container's id or the HTML element to render the map
      style: maptilersdk.MapStyle.STREETS,
      center: [86.151115,23.669296],      // [longitude, latitude]
      zoom: 10   
    });

    const marker = new maptilersdk.Marker()
    .setLngLat([86.151115, 23.669296]) // longitude, latitude
    .addTo(map);