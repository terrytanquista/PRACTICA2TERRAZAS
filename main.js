window.onload = init;

function init() {
  // Configuración inicial del mapa
  const map = new ol.Map({
    view: new ol.View({
      center: ol.proj.transform([-68.0, -16.3], 'EPSG:4326', 'EPSG:3857'),
      zoom: 10,
      maxZoom: 25,
      minZoom: 8
    }),
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    target: 'js-map'
  });

  // Capa WMS de Provincia Murillo
  const provinciaLayer = new ol.layer.Tile({
    source: new ol.source.TileWMS({
      url: "https://geoserver.idesinde.com:8443/geoserver/Terrazas/wms",
      params: {
        LAYERS: "Terrazas:PROVINCIA_MURILLO",
        FORMAT: "image/png",
        TRANSPARENT: true
      }
    })
  });
  
  // Capa WMS de Centros de Salud
  const centrosLayer = new ol.layer.Tile({
    source: new ol.source.TileWMS({
      url: "https://geoserver.idesinde.com:8443/geoserver/Terrazas/wms",
      params: {
        LAYERS: "Terrazas:CENTROS_SALUD",
        FORMAT: "image/png",
        TRANSPARENT: true
      }
    })
  });

  // Capa WMS de Vías
  const viasLayer = new ol.layer.Tile({
    source: new ol.source.TileWMS({
      url: "https://geoserver.idesinde.com:8443/geoserver/Terrazas/wms",
      params: {
        LAYERS: "Terrazas:VIAS",
        FORMAT: "image/png",
        TRANSPARENT: true
      }
    })
  });

  // Agregar las capas al mapa
  map.addLayer(provinciaLayer);
  map.addLayer(centrosLayer);
  map.addLayer(viasLayer);
}
