
require([
    "esri/config",
    "esri/Map",
    "esri/views/MapView",

    "esri/Graphic",
    "esri/layers/GraphicsLayer"

    ], function(esriConfig,Map, MapView, Graphic, GraphicsLayer) {

  esriConfig.apiKey = "YOUR_API_KEY";

  const map = new Map({
    basemap: "arcgis-imagery" //Basemap layer service
  });

  const view = new MapView({
    map: map,
    center: [-111.02222558871773,35.02799598305571],
      zoom: 15,
    container: "viewDiv"
 });

 const graphicsLayer = new GraphicsLayer();
 map.add(graphicsLayer);

 const point = { //Create a point
    type: "point",
    longitude:-111.02222558871773,
    latitude: 35.02799598305571
 };
 const simpleMarkerSymbol = {
    type: "simple-marker",
    color: [255, 0, 0],  // Orange
    outline: {
        color: [255, 255, 255], // White
        width: 2
    }
 };

 const pointGraphic = new Graphic({
    geometry: point,
    symbol: simpleMarkerSymbol
 });
 graphicsLayer.add(pointGraphic);

// Create a line geometry
  const polyline = {
    type: "polyline",
    paths: [
        [-111.0216348556657,35.03371613782562], //Longitude, latitude
        [-111.02222558871773, 35.02799598305571], //Longitude, latitude
]
 };

 const simpleLineSymbol = {
    type: "simple-line",
    color: [226, 119, 40], // Orange
    width: 2
 };
 const polylineGraphic = new Graphic({
    geometry: polyline,
    symbol: simpleLineSymbol
 });
 graphicsLayer.add(polylineGraphic);



// Create a polygon geometry
const polygon = {
    type: "polygon",
    rings: [
        [-111.02030826624372, 35.03175345997123], //Longitude, latitude , 
        [-111.01696559193844, 35.025562785328766], //Longitude, latitude, 
        [-111.02635004220949,35.02352112557561], //Longitude, latitude , 
        [-111.02744347947983, 35.03093498139729],   //Longitude, latitude
    ]
 };

 const simpleFillSymbol = {
    type: "simple-fill",
    color: [227, 139, 79, 0.1],  // Orange, opacity 80%
    outline: {
        color: [255, 255, 255],
        width: 2
    }
 };

    const polygonGraphic = new Graphic({
        geometry: polygon,
        symbol: simpleFillSymbol
        

    });

graphicsLayer.add(polygonGraphic);

const popupTemplate = {
    title: "{Name}",
    content: "{Description}"
 }
 const attributes = {
    Name: "Graphic",
    Description: "Barringer Crater "
 }

});
