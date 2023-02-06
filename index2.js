 require(["esri/config","esri/Map","esri/views/MapView", "esri/Graphic"], function(esriConfig,Map, MapView, Graphic) {
      esriConfig.apiKey = "YOUR_API_KEY";
    const map = new Map({
      basemap:"arcgis-imagery" // Basemap layer service
      });

    const view = new MapView({
      container: "viewDiv", // Div element
      map: map,
      center: [-111.02222558871773,35.02799598305571,],
      zoom: 15
    });

    var point = {
      type: "point", // autocasts as new Point()
      longitude: -111.02222558871773,
      latitude: 35.02799598305571
    };

    var markerSymbol = {
      type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
      color: [255, 0, 0],
      outline: { // autocasts as new SimpleLineSymbol()
        color: [255, 255, 255],
        width: 2
      }
    };

    var pointGraphic = new Graphic({
      geometry: point,
      symbol: markerSymbol
    });

    view.graphics.add(pointGraphic);
  });
