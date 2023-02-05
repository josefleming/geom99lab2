require(["esri/config","esri/Map","esri/views/MapView"
], function(esriConfig,Map, MapView) {
    esriConfig.apiKey = "YOUR_API_KEY";
  const map = new Map({
    basemap: "arcgis-imagery" // Basemap layer service
    });

  const view = new MapView({
    container: "viewDiv", // Div element
    map: map,
    center: [-111.02222558871773,35.02799598305571,],
    zoom: 15
  });
});
