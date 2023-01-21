// const campground = require("../../models/campground");

// const campground = require("../../models/campground");

//   mapboxgl.accessToken = mapToken;
//   const map = new mapboxgl.Map({
//   container: 'map', // container ID
//   style: 'mapbox://styles/mapbox/streets-v11', // style URL
//   center: campground.geometry.coordinates, // starting position [lng, lat]
//   zoom: 9, // starting zoom
//   projection: 'globe' // display the map as a 3D globe
//   });
//   map.on('style.load', () => {
//   map.setFog({}); // Set the default atmosphere style
//   });
 
//   new mapboxgl.Marker()
//   .setLngLat(campground.geometry.coordinates)
//   .addTo(map)


mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10', // stylesheet location
    center: campground.geometry.coordinates, // starting position [lng, lat]
    zoom: 10 // starting zoom
});

map.addControl(new mapboxgl.NavigationControl());


new mapboxgl.Marker()
    .setLngLat(campground.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(
                `<h3>${campground.title}</h3><p>${campground.location}</p>`
            )
    )
    .addTo(map)









//  show.ejs



//     <script>
//         const mapToken = '<%-process.env.MAPBOX_TOKEN%>';
//         const campground = '<%-JSON.stringify(campground)%>';
//     </script>
 
 
//     <script src="/javascripts/showPageMap.js"></script>


// showPageMap.js

// const goodCampground = JSON.parse(campground);
 
// mapboxgl.accessToken = mapToken;
 
 
// const map = new mapboxgl.Map({
//     container: 'map', // container ID
//     style: 'mapbox://styles/mapbox/light-v10', // style URL
//     // style: 'mapbox://styles/mapbox/streets-v11', // style URL
//     // center: [-103.59179687498357, 40.66995747013945], // starting position [lng, lat]
//     // center: campground.geometry.coordiantes,
//     center: goodCampground.geometry.coordiantes,
//     zoom: 2
// });
 
 
// new mapboxgl.Marker()
//     // .setLngLat([-103.59179687498357, 40.66995747013945])
//     .setLngLat(goodCampground.geometry.coordinates)
//     .addTo(map)
