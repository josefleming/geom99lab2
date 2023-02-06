require(["esri/config","esri/Map","esri/views/MapView"
], function(esriConfig,Map, MapView) {
    esriConfig.apiKey = "AAPK12c6320197704f18ae014300c0c8a640LRp_8AJyCI48y66viGFlfywMHBuZRiCvCvaLXBgPd71ZQ5dB7dOwtOoCdOclz67T";
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
